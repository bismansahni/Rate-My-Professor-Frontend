import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import ShowProfessor from './Components/ShowProfessor';
import AdminDashboard from './Components/AdminDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/ShowProfessor" />} />
      <Route path="/ShowProfessor" element={<ShowProfessor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  </Router>
);

export default App;
