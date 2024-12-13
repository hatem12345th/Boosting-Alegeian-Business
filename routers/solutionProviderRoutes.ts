import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// GET /providers: List all solution providers
router.get("/", async (req: Request, res: Response) => {
  try {
    const providers = await prisma.solutionProvider.findMany();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving solution providers", error });
  }
});

// GET /providers/:id: View a solution provider's profile
router.get("/:id", async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const provider = await prisma.solutionProvider.findUnique({
      where: { providerID: parseInt(id) },
    });

    if (!provider) {
      return res.status(404).json({ message: "Solution provider not found" });
    }

    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving solution provider profile", error });
  }
});

// PUT /providers/:id: Update a solution provider's profile
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, expertise, portfolio, rating } = req.body;

  try {
    const updatedProvider = await prisma.solutionProvider.update({
      where: { providerID: parseInt(id) },
      data: {
        name,
        description,
        expertise,
        portfolio,
        rating: rating ? parseFloat(rating) : undefined, // Rating is optional, only update if provided
      },
    });

    res.status(200).json({ message: "Solution provider profile updated successfully", provider: updatedProvider });
  } catch (error) {
    res.status(500).json({ message: "Error updating solution provider profile", error });
  }
});

// POST /providers/:id/messages: Send a message to a solution provider
router.post("/:id/messages", async (req: any, res: any) => {
  const { id } = req.params;
  const { senderID, content } = req.body;

  if (!senderID || !content) {
    return res.status(400).json({ message: "Sender ID and message content are required" });
  }

  try {
    const message = await prisma.message.create({
      data: {
        senderID: parseInt(senderID),
        receiverID: parseInt(id),
        content,
      },
    });

    res.status(201).send({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({error : "Error sending message"});
  }
});

export default router;
