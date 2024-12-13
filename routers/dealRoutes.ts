import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// POST /deal/create: Creates a new deal
router.post("/create", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }else{
  const { problemID, solutionProviderID, status } = req.body;

  if (!problemID || !solutionProviderID || !status) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const deal = await prisma.deal.create({
      data: {
        problemID,
        solutionProviderID,
        status,
      },
      include: {
        problem: true,
        solutionProvider: true,
      },
    });

    res.status(201).json({ message: "Deal created successfully.", deal });
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ message: "Error creating deal."});
  }
}});

// PUT /deal/update/:dealID: Updates an existing deal
router.put("/update/:dealID", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
 }else{ const { dealID } = req.params;
 const { status } = req.body;

 if (!dealID || !status) {
   return res.status(400).json({ message: "dealID and status are required." });
 }

 try {
   const updatedDeal = await prisma.deal.update({
     where: { dealID: parseInt(dealID) },
     data: { status },
     include: {
       problem: true,
       solutionProvider: true,
     },
   });

   res.status(200).json({ message: "Deal updated successfully.", updatedDeal });
 } catch (error) {
   console.error("Error updating deal:", error);
   res.status(500).json({ message: "Error updating deal." });
 }
}}
  );

// GET /deal/:dealID: Retrieves the details of a specific deal
router.get("/:dealID", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });}else{
  const { dealID } = req.params;

  try {
    const deal = await prisma.deal.findUnique({
      where: { dealID: parseInt(dealID) },
      include: {
        problem: true,
        solutionProvider: true,
        users: true,
        communication: true,
        notifications: true,
        payments: true,
      },
    });

    if (!deal) {
      return res.status(404).json({ message: "Deal not found." });
    }

    res.status(200).json({ deal });
  } catch (error) {
    console.error("Error fetching deal:", error);
    res.status(500).json({ message: "Error fetching deal." });
  }
}});

// GET /deal: Retrieves a list of all deals
router.get("/", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }else{
  try {
    const deals = await prisma.deal.findMany({
      include: {
        problem: true,
        solutionProvider: true,
        users: true,
        communication: true,
        notifications: true,
        payments: true,
      },
    });

    res.status(200).json({ deals });
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ message: "Error fetching deals."});
  }
}});

export default router;
