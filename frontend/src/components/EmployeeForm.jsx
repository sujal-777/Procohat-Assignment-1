import { useState } from 'react';

const EmployeeForm = ({ onSubmit, initialData = {} }) => {
  const [employee, setEmployee] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    mobile: initialData.mobile || '',
    designation: initialData.designation || '',
    gender: initialData.gender || '',
    course: initialData.course || '',
    image: initialData.image || ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(employee).map((key) => (
        <div key={key}>
          <label className="block font-medium text-gray-700">{key}</label>
          <input
            type="text"
            name={key}
            value={employee[key]}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default EmployeeForm;
