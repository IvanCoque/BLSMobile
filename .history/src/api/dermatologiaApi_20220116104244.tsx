import axios from 'axios'
import { AsyncStorage from 'react-native';
const baseURL = 'http://192.168.100.34:5000/api'

const dermatologiaApi = axios.create({baseURL});
//Middleware para interceptar las solicitudes
dermatologiaApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem
    }
export default dermatologiaApi;