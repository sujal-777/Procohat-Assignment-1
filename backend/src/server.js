// server.js

import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/employees', employeeRoutes);

// Connect to MongoDB and Start the Server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB and server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Could not connect to the database", err);
    process.exit(1); // Exit process with failure
  });
