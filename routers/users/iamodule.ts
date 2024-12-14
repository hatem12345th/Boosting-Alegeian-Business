import { Router } from "express";
import axios from "axios";

const router = Router();

router.post("/iamodule", async (req, res, next) => {
  try {
    // Get query from the request body (assumes the request contains a 'query' field)
    const { query } = req.body;

    // Send a POST request to the Flask API
    const response = await axios.post('http://localhost:5000/recommend', { query });

    // Handle the response from the Flask API
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error communicating with Flask API' });
  }
});

export default router;
