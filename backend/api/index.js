// server.js

import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Define the whitelist
const whitelist = ['http://localhost:5173'];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow access
    } else {
      callback(new Error('Not allowed by CORS')); // Deny access
    }
  },
};

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/employees', employeeRoutes);
app.get('/test', (req, res) => res.send("Express on Vercel"))

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


export default app