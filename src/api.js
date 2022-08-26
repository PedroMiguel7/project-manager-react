import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-brisa-react.vercel.app/',
  mode: "no-cors"
});

const token = localStorage.getItem('token')
if (token) {
  api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
}

export default api;