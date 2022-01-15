import axios from 'axios'
const baseURL = '45.186.6.235/api'

const dermatologiaApi = axios.create({baseURL});

export default dermatologiaApi;