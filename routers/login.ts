import { Router } from "express";
import passport from "../passport";

const router = Router();

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);

export default router;
