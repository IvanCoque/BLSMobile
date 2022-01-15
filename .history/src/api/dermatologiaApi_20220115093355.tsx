import axios from 'axios'
const baseURL = 'http:/api'

const dermatologiaApi = axios.create({baseURL});

export default dermatologiaApi;