// src/routes/employeeRoutes.js

import express from 'express';
import {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from '../../api/controllers/employee.controller.js';

const router = express.Router();

/**
 * @route   GET /employees
 * @desc    Get all employees
 */
router.get('/', getEmployees);

/**
 * @route   POST /employees
 * @desc    Create a new employee
 */
router.post('/', createEmployee);

/**
 * @route   GET /employees/:id
 * @desc    Get a single employee by ID
 */
router.get('/:id', getEmployeeById);

/**
 * @route   PUT /employees/:id
 * @desc    Update an employee by ID
 */
router.put('/:id', updateEmployee);

/**
 * @route   DELETE /employees/:id
 * @desc    Delete an employee by ID
 */
router.delete('/:id', deleteEmployee);

export default router;
