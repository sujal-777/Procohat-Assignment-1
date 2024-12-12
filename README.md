# Hospital Management Dashboard

This is a MERN stack application that serves as an Employee Management Dashboard. It includes functionalities to create, view, edit, and delete employee details. The project has a frontend interface built with Vite-React and styled with Tailwind CSS, while the backend is built using Express.js with MongoDB for data storage.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Technologies and Dependencies](#technologies-and-dependencies)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)

## Features
- **Employee Management**: Add new employee details, edit existing employee information, view all employees, and delete employees from the database.
- **CRUD Operations**: Fully functional Create, Read, Update, and Delete operations.
- **Responsive Dashboard**: The main dashboard displays employee details in a row-based format, styled with Tailwind CSS.
- **Form Pages**: Separate pages for adding and editing employees with a registration form layout.

## Technologies and Dependencies

### Frontend (Vite-React)
- **React** - Frontend framework
- **Vite** - Fast development environment
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for styling

### Backend (Express.js)
- **Express.js** - Web application framework for Node.js
- **Mongoose** - MongoDB object modeling for Node.js
- **dotenv** - Load environment variables from a `.env` file
- **CORS** - Cross-origin resource sharing middleware

### Database
- **MongoDB** - NoSQL database for storing employee details

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (cloud-based or local instance)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd employee-management-dashboard
Backend Setup:

Navigate to the backend directory:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the backend directory with the following content:
plaintext
Copy code
MONGODB_URI=<your-mongodb-uri>
PORT=5000
Start the backend server:
bash
Copy code
npm start
Frontend Setup:

Open a new terminal and navigate to the frontend directory:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Run the frontend application:
bash
Copy code
npm run dev
Accessing the Application

Visit the frontend at http://localhost:5713 and the backend API at http://localhost:5000.
Usage
Dashboard: View all employees, with options to edit or delete each.
Add Employee: Navigate to the "Add Employee" page, fill in the form, and save to add a new employee.
Edit Employee: On the dashboard, click "Edit" next to any employee to update their details.
Delete Employee: On the dashboard, click "Delete" next to any employee to remove them.
API Endpoints
Base URL
All endpoints use the base URL: http://localhost:5000/api/employees

Routes
GET /api/employees - Get all employees.
POST /api/employees - Add a new employee.
GET /api/employees/
- Get a specific employee by ID.
PUT /api/employees/
- Update an employee by ID.
DELETE /api/employees/
- Delete an employee by ID.
