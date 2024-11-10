import dotenv from 'dotenv';
dotenv.config();  // Load environment variables before anything else

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/employees', employeeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
