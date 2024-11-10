const express = require('express');
const connectDB = require('./db');
const predictRoute = require('./routes/predict');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api', predictRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));

