// src/models/employee.model.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  clinicName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  clinicNumber: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  patientNumber: {
    type: Number,
    required: true,
    min: 0, // Ensures no negative values
  },
  revenue: {
    type: Number,
    required: true,
    min: 0, // Ensures no negative values
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
