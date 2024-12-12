import { Router, Request, Response } from "express";

const router = Router();

// Logout Route
router.get("/", (req: Request, res: Response) => {
  if (typeof req.logout === "function") {
    req.logout((err) => {
      if (err) {
        return res.status(500).send("Error logging out");
      }
      res.redirect("/login");
    });
  } else {
    res.status(400).send("Logout method not available");
  }
});

export default router;
