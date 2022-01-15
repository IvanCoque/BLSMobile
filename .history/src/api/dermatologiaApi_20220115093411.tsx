import axios from 'axios'
const baseURL = 'http://200.24.138.2:5000/api'

const dermatologiaApi = axios.create({baseURL});

export default dermatologiaApi;