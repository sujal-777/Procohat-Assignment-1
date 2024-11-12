import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = () => axios.get(API_URL);
export const addEmployee = (employeeData) => axios.post(API_URL, employeeData);
export const getEmployeeById = (id) => axios.get(`${API_URL}/${id}`);
export const updateEmployee = (id, employeeData) => axios.put(`${API_URL}/${id}`, employeeData);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
