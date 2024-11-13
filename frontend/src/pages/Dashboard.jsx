import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EmployeeList from '../components/EmployeeList';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);  // Run only once when the component mounts

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      fetchEmployees(); // Refresh the list after deletion
    } catch (error) {
      console.error("Failed to delete employee", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Employee</Link>
      <EmployeeList employees={employees} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
