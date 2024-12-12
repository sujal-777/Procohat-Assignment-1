import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
      setEmployeeData(response.data);
    };
    fetchEmployee();
  }, [id]);

  const handleEditEmployee = async (employee) => {
    await axios.put(`http://localhost:5000/api/employees/${id}`, employee);
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Details</h2>
      {employeeData && <EmployeeForm onSubmit={handleEditEmployee} initialData={employeeData} />}
    </div>
  );
};

export default EditEmployee;
