import axios from 'axios';

const api = axios.create({
  baseURL: 'https://golang-posgre-brisanet.herokuapp.com/',
});

const token = localStorage.getItem('token')
if (token) {
  api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
}

export default api;