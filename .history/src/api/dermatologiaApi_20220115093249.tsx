import axios from 'axios'
const baseURL = '/api'

const dermatologiaApi = axios.create({baseURL});

export default dermatologiaApi;