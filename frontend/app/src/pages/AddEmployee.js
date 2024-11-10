import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/employeeService';

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: '', email: '', mobile: '', image: null,
    designation: '', gender: '', course: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleFileChange = (e) => {
    setEmployee({ ...employee, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(employee).forEach(key => formData.append(key, employee[key]));
    await addEmployee(formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input name="designation" placeholder="Designation" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="course" placeholder="Course" onChange={handleChange} required />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEmployee;
