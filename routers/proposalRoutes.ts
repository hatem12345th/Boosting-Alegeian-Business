import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// POST /proposal/submit/:problemID: Submits a proposal for a problem
router.post("/submit/:problemID", async (req: any, res: any) => {
  const { problemID } = req.params;
  const { userID, details, financialOffer, solutionProviderID } = req.body;

  if (!userID || !details || !financialOffer || !solutionProviderID) {
    return res.status(400).json({ message: "User ID, details, financial offer, and solution provider ID are required" });
  }

  try {
    const proposal = await prisma.proposal.create({
      data: {
        userID: parseInt(userID),
        problemID: parseInt(problemID),
        details,
        financialOffer: parseFloat(financialOffer),
        solutionProviderID: parseInt(solutionProviderID),
      },
    });

    res.status(201).json({ message: "Proposal submitted successfully", proposal });
  } catch (error) {
    res.status(500).json({ message: "Error submitting proposal", error });
  }
});

// PUT /proposal/update/:proposalID: Updates an existing proposal
router.put("/update/:proposalID", async (req: Request, res: Response) => {
  const { proposalID } = req.params;
  const { details, financialOffer } = req.body;

  try {
    const updatedProposal = await prisma.proposal.update({
      where: { proposalID: parseInt(proposalID) },
      data: {
        details: details || undefined,  // Update only if provided
        financialOffer: financialOffer ? parseFloat(financialOffer) : undefined, // Update only if provided
      },
    });

    res.status(200).json({ message: "Proposal updated successfully", proposal: updatedProposal });
  } catch (error) {
    res.status(500).json({ message: "Error updating proposal", error });
  }
});

// GET /proposal/:proposalID: Retrieves details of a specific proposal
router.get("/:proposalID", async (req: any, res: any) => {
  const { proposalID } = req.params;

  try {
    const proposal = await prisma.proposal.findUnique({
      where: { proposalID: parseInt(proposalID) },
      include: {
        problem: true, // Include the related problem in the response
        user: true, // Include the user who submitted the proposal
        solutionProvider: true, // Include the solution provider for this proposal
      },
    });

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    res.status(200).json(proposal);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving proposal details", error });
  }
});

export default router;
