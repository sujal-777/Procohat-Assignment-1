import express from 'express';
import { createEmployee, getEmployees, updateEmployee, deleteEmployee } from '../controllers/employee.controller.js';

const router = express.Router();

// Define routes
router.post('/create', createEmployee);
router.get('/list', getEmployees);
router.put('/edit/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export default router;
