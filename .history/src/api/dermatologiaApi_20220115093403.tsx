import axios from 'axios'
const baseURL = 'http://http://200.24.138.2/api'

const dermatologiaApi = axios.create({baseURL});

export default dermatologiaApi;