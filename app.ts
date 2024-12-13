import express, { Application } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import passport from "./passport";
import register from "./routers/users/register";
import login from "./routers/users/login";
import vuprofile from "./routers/users/vuprofile";
import uprofile from "./routers/users/uprofile";
import resetpassword from "./routers/users/reset-password";
import logout from "./routers/users/logout";
import problemRoutes from "./routers/problems/problemroutes";
import solutionProviderRoutes from "./routers/solutionProviderRoutes";
import proposalRoutes from "./routers/proposalRoutes";
//import paymentRoutes from "./routers/paymentRoutes";
import cors from "cors";



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

app.use(cors({ origin: 'http://localhost:3000', methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
// Routes
app.use("/users", register);
app.use("/users", login);
app.use("/users", vuprofile);
app.use("/users", logout);
app.use("/users", uprofile);
app.use("/users", resetpassword);
app.use("/problem", problemRoutes);
app.use("/providers", solutionProviderRoutes);
app.use("/proposal", proposalRoutes);
//app.use("/payment", paymentRoutes);





// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});   