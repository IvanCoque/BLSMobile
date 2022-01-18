import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'http://3.12.17.53:5001/api'

const dermatologiaApi = axios.create({baseURL});
//Middleware para interceptar las solicitudes
dermatologiaApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            
            config.headers['x-access-token']  = token;
        }
        return config;
    }
)

export default dermatologiaApi;