import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleAddEmployee = async (employee) => {
    try {
      await axios.post('https://hospital-backend-alpha.vercel.app/api/employees', employee);
      navigate('/');  // Redirects to Dashboard after adding
    } catch (error) {
      console.error("Failed to add employee", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Details</h2>
      <EmployeeForm onSubmit={handleAddEmployee} />
    </div>
  );
};

export default AddEmployee;
