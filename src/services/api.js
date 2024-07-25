import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login/admin`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};



export const addProfessor = async (name, subject) => {
  try {
    const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from local storage
    if (!token) {
      throw new Error('No JWT token found');
    }
    const response = await axios.post(
      `${API_URL}/auth/add/professors`,
      { name, subject },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in addProfessor:', error);
    throw error;
  }
};

export const getProfessor = async (name, subject) => {
  try {
    const response = await axios.post(`${API_URL}/add/show`, {
      name,
      subject,
    });
    return response.data;
  } catch (error) {
    console.error('Error in getProfessor:', error);
    throw error;
  }
};


export const addReview = async (professorName, comment, rating) => {
  try {
    const response = await axios.post(`${API_URL}/add/review`, {
      professorName,
      comment,
      rating,
    });
    return response.data;
  } catch (error) {
    console.error('Error in addReview:', error);
    throw error;
  }
};
