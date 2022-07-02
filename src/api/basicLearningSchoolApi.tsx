import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'http://localhost:5000/api'

const basicLearningSchoolApi = axios.create({baseURL});
//Middleware para interceptar las solicitudes
basicLearningSchoolApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            
            (config as any).headers['x-access-token']  = token;
        }
        return config;
    }
)

export default basicLearningSchoolApi;