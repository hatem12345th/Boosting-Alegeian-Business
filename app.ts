import express, { Application } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import passport from "./passport";
import { hashPassword } from "./utilities/bcrypt";
import register from "./routers/users/register";
import login from "./routers/users/login";
import vuprofile from "./routers/users/vuprofile";
import uprofile from "./routers/users/uprofile";
import resetpassword from "./routers/users/reset-password";
import logout from "./routers/users/logout";
import verifyemail from "./routers/users/verifyemail";
import { verify } from "crypto";
import problemRoutes from "./routers/problems/problemroutes";
import solutionProviderRoutes from "./routers/solutionProviderRoutes";


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
app.use("/users", register);
app.use("/users", login);
app.use("/users", vuprofile);
app.use("/users", logout);
app.use("/users", uprofile);
app.use("/users", resetpassword);
app.use("/users", verifyemail);
app.use("/problem", problemRoutes);
app.use("/providers", solutionProviderRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});   