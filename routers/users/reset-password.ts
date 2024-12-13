import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { hashPassword } from "../../utilities/bcrypt";  // Assume a function that hashes the password

const prisma = new PrismaClient();
const router = Router();

// Helper function to send reset email
async function sendResetEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or any other email service
    auth: {
      user: "your-email@example.com", // define later
      pass: "your-email-password",//define later
    },
  });

  const resetLink = `http://yourdomain.com/reset-password/${token}`;
  
  const mailOptions = {
    from: "your-email@example.com",
    to: email,
    subject: "Password Reset Request",
    text: `Click the link to reset your password: ${resetLink}`,
  };

  await transporter.sendMail(mailOptions);
}

// Request password reset
router.post("/password-reset", async (req:any, res:any) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Set token and expiry in the database (e.g., 1 hour expiry)
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now
    await prisma.user.update({
      where: { email },
      data: { resetToken, resetTokenExpiry },
    });

    // Send reset email with token
    await sendResetEmail(email, resetToken);

    res.status(200).json({ message: "Password reset instructions sent to email" });
  } catch (error) {
    console.error("Error in password reset:", error);
    res.status(500).json({ message: "Something went wrong, please try again later" });
  }
});

// Reset password (after user clicks reset link)
router.post("/reset-password/:token", async (req:any, res:any) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: "New password is required" });

  try {
    // Find user by reset token
    const user = await prisma.user.findFirst({ where: { resetToken: token } });
    
    if (!user) {
      return res.status(404).json({ message: "Invalid or expired reset token" });
    }

    // Check if token is expired
    if (!user.resetTokenExpiry || new Date() > user.resetTokenExpiry) {
      return res.status(400).json({ message: "Reset token has expired" });
    }

    // Hash the new password
    const hashedPassword = await hashPassword(password);

    // Update user's password and clear reset token and expiry
    await prisma.user.update({
      where: { userID: user.userID },
      data: {
        passwordHash: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    res.status(200).json({ message: "Password has been successfully reset" });
  } catch (error) {
    console.error("Error in resetting password:", error);
    res.status(500).json({ message: "Something went wrong, please try again later" });
  }
});

export default router;
