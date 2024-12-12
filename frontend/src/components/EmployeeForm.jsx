import { useState } from 'react';

const EmployeeForm = ({ onSubmit, initialData = {} }) => {
  const [employee, setEmployee] = useState({
    clinicName: initialData.clinicName || '',
    doctorName: initialData.doctorName || '',
    clinicNumber: initialData.clinicNumber || '',
    location: initialData.location || '',
    patientNumber: initialData.patientNumber || '',
    revenue: initialData.revenue || '',
  });

  const fieldLabels = {
    clinicName: "Clinic Name",
    doctorName: "Doctor Name",
    clinicNumber: "Clinic Number",
    location: "Location",
    patientNumber: "Patient Number",
    revenue: "Revenue",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: name === "clinicNumber" || name === "patientNumber" || name === "revenue"
        ? value.replace(/[^0-9]/g, '') // Allow only numbers for specific fields
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...employee,
      clinicNumber: parseInt(employee.clinicNumber, 10) || 0, // Ensure numeric values
      patientNumber: parseInt(employee.patientNumber, 10) || 0,
      revenue: parseFloat(employee.revenue) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(employee).map((key) => (
        <div key={key}>
          <label className="block font-medium text-gray-700">{fieldLabels[key]}</label>
          <input
            type={['clinicNumber', 'patientNumber', 'revenue'].includes(key) ? 'number' : 'text'}
            name={key}
            value={employee[key]}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required // Enforce validation on frontend
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
