import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios"; // To make requests to the SATIM API

const prisma = new PrismaClient();
const router = Router();

// Replace with actual SATIM API details
const SATIM_API_BASE_URL = "https://api.satim.dz"; // Replace with the real SATIM API URL
const SATIM_API_KEY = process.env.SATIM_API_KEY;  // API Key from SATIM

// POST /payment/process: Processes a payment
router.post("/process", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }else{
  const { userID, amount, currency } = req.body;

  if (!userID || !amount || !currency) {
    return res.status(400).json({ message: "User ID, amount, and currency are required." });
  }

  try {
    // Simulate a request to SATIM API for payment processing
    const satimResponse = await axios.post(
      `${SATIM_API_BASE_URL}/payments/process`,
      {
        amount,
        currency,
        userReference: userID, // Link the payment to the user in SATIM system
      },
      {
        headers: {
          Authorization: `Bearer ${SATIM_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Assume SATIM API responds with a success status and transaction details
    const { transactionID, status } = satimResponse.data;

    // Save payment details in the database
    const payment = await prisma.payment.create({
      data: {
        userID,
        amount,
        currency,
        status,
      },
    });

    res.status(201).json({ message: "Payment processed successfully.", payment, transactionID });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Payment processing failed." });
  }
}});

// GET /payment/invoice/:paymentID: Generates an invoice for a payment
router.get("/invoice/:paymentID", async (req: any, res: any) => {
  const { paymentID } = req.params;

  try {
    // Fetch payment details from the database
    const payment = await prisma.payment.findUnique({
      where: { paymentID: parseInt(paymentID) },
      include: {
        user: true, // Include user details for the invoice
      },
    });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found." });
    }

    // Simulate an invoice generation
    const invoice = {
      invoiceID: `INV-${payment.paymentID}`,
      user: {
        userID: payment.userID,
        username: payment.user.username,
        email: payment.user.email,
      },
      paymentDetails: {
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        date: Date, // Assuming `createdAt` is in the Payment model
      },
    };

    res.status(200).json({ message: "Invoice generated successfully.", invoice });
  } catch (error) {
    console.error("Error generating invoice:", error);
    res.status(500).send({ error: "Error generating invoice." });
  }
});

export default router;
