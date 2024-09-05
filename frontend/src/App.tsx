import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AvailabilityForm from './components/Availability/AvailabilityForm';
import AvailabilityList from './components/Availability/AvailabilityList';
import SessionForm from './components/Sessions/SessionForm';
import SessionList from './components/Sessions/SessionList';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/availability" element={<><AvailabilityForm /><AvailabilityList /></>} />
              <Route path="/sessions" element={<><SessionForm /><SessionList /></>} />
          </Routes>
      </Router>
  );
};

export default App;