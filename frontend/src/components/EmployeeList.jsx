import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Clinic Name</th>
        <th className="py-2 px-4 border-b">Doctor Name</th>
        <th className="py-2 px-4 border-b">Clinic Number</th>
        <th className="py-2 px-4 border-b">Location</th>
        <th className="py-2 px-4 border-b">No. of Patient</th>
        <th className="py-2 px-4 border-b">revenue</th>
      
      </tr>
    </thead>
    <tbody>
      {employees.map(employee => (
        <tr key={employee._id}>
          <td className="py-2 px-4 border-b">{employee.clinicName}</td>
          <td className="py-2 px-4 border-b">{employee.doctorName}</td>
          <td className="py-2 px-4 border-b">{employee.clinicNumber}</td>
          <td className="py-2 px-4 border-b">{employee.location}</td>
          <td className="py-2 px-4 border-b">{employee.patientNumber}</td>
          <td className="py-2 px-4 border-b">{employee.revenue}</td>
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
