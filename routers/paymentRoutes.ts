
import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import chargily, { Invoice, Mode } from "chargily-epay-js";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const router = Router();

// POST /payment/process: Processes a payment
router.post("/process", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { userID, amount, currency } = req.body;

  if (!userID || !amount || !currency) {
    return res.status(400).json({ message: "User ID, amount, and currency are required." });
  }

  try {
    const order = new Invoice();
    order.invoiceNumber = Date.now().toString(); // Unique invoice number
    order.mode = Mode.EDAHABIA; // or Mode.CIB
    order.backUrl = "https://www.example.org/"; // Must be a valid and active URL
    order.amount = amount; // Must be an integer, and more or equal to 75
    order.webhookUrl = "https://www.example.org/webhook-validator"; // URL to receive the response
    order.client = "Client Name"; // Replace with actual client name
    order.discount = 10; // Percentage between [0, 100]
    order.clientEmail = "client@example.com"; // Replace with actual client email
    order.appKey = process.env.CHARGILY_APP_KEY || "";

    // Create payment and get checkout URL
    const response = await chargily.createPayment(order);
    const checkoutUrl = response.checkout_url; // Redirect to this URL to process the checkout

    // Save payment details in the database
    const payment = await prisma.payment.create({
      data: {
        userID,
        amount,
        currency,
        status: "Pending", // Initial status
        transactionID: order.invoiceNumber,
      },
    });

    res.status(201).json({ message: "Payment processed successfully.", payment, checkoutUrl });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Payment processing failed." });
  }
});

// GET /payment/invoice/:paymentID: Generates an invoice for a payment
router.get("/invoice/:paymentID", async (req: any, res: any) => {
  const { paymentID } = req.params;

  try {
    // Fetch payment details from the database
    const payment = await prisma.payment.findUnique({
      where: { paymentID: parseInt(paymentID, 10) },
      include: {
        user: true, // Include user details for the invoice
      },
    });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found." });
    }

    // Generate invoice
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
        date: Date, // Assuming `createdAt` exists in the Payment model
      },
    };

    res.status(200).json({ message: "Invoice generated successfully.", invoice });
  } catch (error) {
    console.error("Error generating invoice:", error);
    res.status(500).json({ error: "Error generating invoice." });
  }
});

export default router;
