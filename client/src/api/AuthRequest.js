import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:4000' });
const API = axios.create({ baseURL: 'https://mern-mini-demo.onrender.com/' });

export const logIn = (formData) => API.post('/auth/login', formData); 

export const signUp = (formData) => API.post('/auth/register', formData);