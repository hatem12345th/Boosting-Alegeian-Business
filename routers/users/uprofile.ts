import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.put("/profile/:id", async (req:any, res:any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  else{
  const { id } = req.params;
  const { username, email, role } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { userID: parseInt(id) },
      data: { username, email, role },
    });

    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
}});

export default router;
