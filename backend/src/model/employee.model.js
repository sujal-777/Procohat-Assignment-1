// src/models/employee.model.js

import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  designation: String,
  gender: String,
  course: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
