import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
