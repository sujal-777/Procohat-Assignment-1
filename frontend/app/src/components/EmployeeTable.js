import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeTable = ({ employees, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Designation</th>
        <th>Gender</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((emp) => (
        <tr key={emp._id}>
          <td>{emp.name}</td>
          <td>{
