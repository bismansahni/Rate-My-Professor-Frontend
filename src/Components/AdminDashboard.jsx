import React, { useState } from 'react';
import { addProfessor } from '../services/api';
// import '../styles/AdminDashboard.css'; // Assuming you have a CSS file for styles
const AdminDashboard = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addProfessor(name, subject);
      console.log('Professor added successfully:', data);
      setSuccessMessage('Professor added successfully!');
      setName(''); // Clear the form fields
      setSubject('');
    } catch (error) {
      console.error('Error adding professor:', error);
      setSuccessMessage('Error adding professor');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Professor</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default AdminDashboard;