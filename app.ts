import express, { Application } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import passport from "./passport";
import { hashPassword } from "./utilities/bcrypt";
import register from "./routers/users/register";
import login from "./routers/users/login";
import profile from "./routers/users/profile";
import logout from "./routers/users/logout";


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
app.use("/register", register);
app.use("/users", login);
app.use("/profile/:id", profile);
app.use("/logout", logout);






// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});   