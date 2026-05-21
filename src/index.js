require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
require('./workers/deploymentWorker'); // Start the worker
const webhookRoutes = require('./routes/webhook');

const app = express();

app.use(express.json());

// Routes
app.use('/webhook', webhookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
