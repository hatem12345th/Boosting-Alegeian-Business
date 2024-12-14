import express from 'express'; 
import axios from 'axios';

// Initialize the Express app
const app = express();
app.use(express.json());

// Define the route that interacts with the Python API
app.post('/api/recommend', async (req: any, res: any) => {
    const { query } = req.body;

    // Validate the input
    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        // Send the query to the Python recommendation API
        const pythonApiResponse = await axios.post('http://localhost:5000/recommend', { query });

        // Respond back to the client with the Python API's result
        return res.json(pythonApiResponse.data);
    } catch (error) {
        console.error('Error communicating with the Python API:', error);

        // Handle any errors from the Python API
        if (axios.isAxiosError(error)) {
            return res.status(500).json({ error: error.response?.data || 'Python API error' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
