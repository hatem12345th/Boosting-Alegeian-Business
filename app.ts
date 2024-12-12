import express, { Application } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import passport from "./passport";
import { hashPassword } from "./bcrypt";

dotenv.config();

const app: Application = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 }, // 1 day
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post("/create", async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the user");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  }
)
);

app.get("/home", (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.send("Success! You are logged in.");
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect("/login");
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
