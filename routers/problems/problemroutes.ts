import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";  // For handling file uploads

const prisma = new PrismaClient();
const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Store files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST /problem/create: Creates a new problem
router.post("/create", async (req: any, res: any) => {
  const { title, description, category, budget, status, userID } = req.body;

  if (!title || !description || !category || !budget || !status || !userID) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProblem = await prisma.problem.create({
      data: {
        title,
        description,
        category,
        budget: parseFloat(budget),
        status,
        userID: parseInt(userID),
      },
    });
    res.status(201).json({ message: "Problem created successfully", problem: newProblem });
  } catch (error) {
    res.status(500).json({ message: "Error creating problem", error });
  }
});

// PUT /problem/update/:problemID: Updates an existing problem by its ID
router.put("/update/:problemID", async (req: Request, res: Response) => {
  const { problemID } = req.params;
  const { title, description, category, budget, status } = req.body;

  try {
    const updatedProblem = await prisma.problem.update({
      where: { problemID: parseInt(problemID) },
      data: {
        title,
        description,
        category,
        budget: parseFloat(budget),
        status,
      },
    });
    res.status(200).json({ message: "Problem updated successfully", problem: updatedProblem });
  } catch (error) {
    res.status(500).json({ message: "Error updating problem", error });
  }
});

// POST /problem/attach-file/:problemID: Attaches a file to a problem
router.post("/attach-file/:problemID", upload.single("attachment"), async (req: any, res: any) => {
  const { problemID } = req.params;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const updatedProblem = await prisma.problem.update({
      where: { problemID: parseInt(problemID) },
      data: { attachments: file.path }, // Save the file path in the problem
    });
    res.status(200).json({ message: "File attached successfully", problem: updatedProblem });
  } catch (error) {
    res.status(500).json({ message: "Error attaching file", error });
  }
});

// POST /problem/add-tags/:problemID: Adds tags to a problem
router.post("/add-tags/:problemID", async (req: any, res: any) => {
  const { problemID } = req.params;
  const { tags } = req.body;  // Expected format: ['tag1', 'tag2', ...]

  if (!tags || !Array.isArray(tags)) {
    return res.status(400).json({ message: "Tags must be an array" });
  }

  try {
    // Update the problem with the tags (you may need to store tags in a separate table or column)
    const updatedProblem = await prisma.problem.update({
      where: { problemID: parseInt(problemID) },
      data: { category: tags.join(", ") }, // Assuming the tags are stored as a comma-separated string
    });
    res.status(200).json({ message: "Tags added successfully", problem: updatedProblem });
  } catch (error) {
    res.status(500).json({ message: "Error adding tags", error });
  }
});

// GET /problem/:problemID: Retrieves the details of a specific problem
router.get("/:problemID", async (req: any, res: any) => {
  const { problemID } = req.params;

  try {
    const problem = await prisma.problem.findUnique({
      where: { problemID: parseInt(problemID) },
    });
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving problem", error });
  }
});

// GET /problem: Retrieves a list of all problems
router.get("/", async (req: Request, res: Response) => {
  try {
    const problems = await prisma.problem.findMany();
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving problems", error });
  }
});

export default router;
