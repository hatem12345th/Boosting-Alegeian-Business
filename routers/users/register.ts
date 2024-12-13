import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../../utilities/bcrypt";


const prisma = new PrismaClient();
const router = Router();

router.post("/register", async (req: any, res: any) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Optional: Add additional validation checks here
  // For example: validate email format, password strength, etc.

  try {
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        role,
        passwordHash: hashedPassword,
      },
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error: any) {
    // Handle specific Prisma errors
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email or username already exists" });
    }
    if (error.code === "P2022") {
      return res.status(400).json({
        message: `Invalid value for column: ${error.meta?.column}`,
        error: error.meta,
      });
    }

    console.error(error); // Log the full error for debugging
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

export default router;
