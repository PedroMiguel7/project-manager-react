import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-brisa-react.vercel.app/',
  mode: "no-cors"
});

const token = localStorage.getItem('token')
const URL = axios.create({
  baseURL:'https://golang-posgre-brisanet.herokuapp.com'
})

if (token) {
  URL.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
}

export default api;