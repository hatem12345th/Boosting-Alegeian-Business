import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err:any, user:any, info:any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
});

export default router;
