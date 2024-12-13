import { Router } from "express";

const router = Router();

router.post("/users", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out", error: err });
    }
    res.status(200).json({ message: "Logout successful" });
  });
});

export default router;
