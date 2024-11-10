import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, employeeData = {} }) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    ...employeeData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'mobile', 'designation', 'course'].map((field) => (
        <div key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
          <input type="text" name={field} value={employee[field]} onChange={handleChange} required />
        </div>
      ))}
      <div>
        <label>Gender:</label>
        <select name="gender" value={employee.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
