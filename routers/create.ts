import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../bcrypt";

const router = Router();
const prisma = new PrismaClient();

router.post("/",async (req: any, res: any) => {
  console.log("create user");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }
  
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
  
      if (existingUser) {
        return res.status(400).send("User already exists");
      }
  
      const hashedPassword = await hashPassword(password);
      const newUser = await prisma.user.create({
        data: { email, password: hashedPassword },
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while creating the user");
    }
  
});

export default router;
