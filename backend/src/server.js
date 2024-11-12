import dotenv from 'dotenv';
dotenv.config();  // Load environment variables before anything else

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

// Start the server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(5000))
  .then(() => console.log('Connected to DB at port 5000'))
  .catch((err) => console.log("Could not connect to the database", err));


//R321BUJXuTIYZX9P
