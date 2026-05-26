import axios from 'axios';

const API = axios.create({
  baseURL: 'https://she-can-foundation-pqpr.onrender.com/api', 
});

export const submitContactForm = (data) => {
  return API.post('/contact', data);
};

export const fetchAllContacts = () => {
  return API.get('/contact');
};