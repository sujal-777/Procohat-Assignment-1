import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Email</th>
        <th className="py-2 px-4 border-b">Mobile</th>
        <th className="py-2 px-4 border-b">Designation</th>
        <th className="py-2 px-4 border-b">Gender</th>
        <th className="py-2 px-4 border-b">Course</th>
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(employee => (
        <tr key={employee._id}>
          <td className="py-2 px-4 border-b">{employee.name}</td>
          <td className="py-2 px-4 border-b">{employee.email}</td>
          <td className="py-2 px-4 border-b">{employee.mobile}</td>
          <td className="py-2 px-4 border-b">{employee.designation}</td>
          <td className="py-2 px-4 border-b">{employee.gender}</td>
          <td className="py-2 px-4 border-b">{employee.course}</td>
          <td className="py-2 px-4 border-b">
            <Link to={`/edit/${employee._id}`} className="text-blue-500 mx-2">Edit</Link>
            <button onClick={() => onDelete(employee._id)} className="text-red-500">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeList;
