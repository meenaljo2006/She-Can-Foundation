import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const submitContactForm = (data) => {
  return API.post('/contact', data);
};

export const fetchAllContacts = () => {
  return API.get('/contact');
};