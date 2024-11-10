const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/predict', async (req, res) => {
    try {
        const { features } = req.body;
        const response = await axios.post('http://127.0.0.1:5000/predict', { features });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

