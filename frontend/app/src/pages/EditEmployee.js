import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../services/employeeService';

function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '', email: '', mobile: '', designation: '',
    gender: '', course: '', image: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const response = await getEmployeeById(id);
    setEmployee(response.data);
  };

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
    await updateEmployee(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={employee.name} onChange={handleChange} required />
        <input name="email" value={employee.email} onChange={handleChange} required />
        <input name="mobile" value={employee.mobile} onChange={handleChange} required />
        <input name="designation" value={employee.designation} onChange={handleChange} required />
        <select name="gender" value={employee.gender} onChange={handleChange} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="course" value={employee.course} onChange={handleChange} required />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditEmployee;
