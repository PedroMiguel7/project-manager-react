import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-brisa-react.vercel.app/'
});

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
}

export default api;