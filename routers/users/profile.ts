import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/users", async (req:any, res:any) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { userID: parseInt(id) },
      select: { username: true, email: true, role: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user profile", error });
  }
});

export default router;
