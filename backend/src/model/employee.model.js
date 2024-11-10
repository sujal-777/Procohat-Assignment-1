import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  designation: String,
  gender: String,
  course: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

// Exporting as default
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
