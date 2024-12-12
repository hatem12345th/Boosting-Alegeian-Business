import express, { Application } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import passport from "./passport";
import { hashPassword } from "./bcrypt";
import hello from "./routers/hello";
import logout from "./routers/logout";
import create from "./routers/create";
import login from "./routers/login";
import home from "./routers/home";

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
app.use("/hello", hello);
app.use("/logout", logout);
app.use("/create", create);
app.use("/login", login);
app.use("/home", home);



app.get("/home", (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.send("Success! You are logged in.");
  } else {
    res.redirect("/login");
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
