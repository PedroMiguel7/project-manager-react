import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3000/',
  //baseURL: 'https://golang-posgre-brisanet.herokuapp.com/',
  baseURL: 'https://api-brisa-react.vercel.app/',
  mode: 'no-cors'
});

const token = localStorage.getItem('token')

if (token) {
  Object.assign(api.defaults.headers.common, { Authorization: `Bearer ${JSON.parse(token)}` });
}
console.log(api.defaults.headers.common['Authorization'])

export default api;