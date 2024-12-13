import { Router } from "express";

const router = Router();

router.post("/verify-email", async (req:any, res:any) => {
  const { email, token } = req.body;

  if (!email || !token) {
    return res.status(400).json({ message: "Email and token are required" });
  }

  // Implement token verification logic here
  res.status(200).json({ message: "Email verified successfully" });
});

export default router;
