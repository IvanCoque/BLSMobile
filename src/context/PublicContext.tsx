import React, {createContext, useReducer, useEffect} from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage';

import basicLearningSchoolApi from '../api/basicLearningSchoolApi';
import { PublicUsuario, LoginResponse, PublicData, PublicRegisterData } from '../interfaces/appInterfaces'
import { publicReducer, PublicState} from './publicReducer';
type PublicContextProps = {
    user: PublicUsuario | null;
    registro : (registerData : PublicRegisterData) => void
}

const publicInitialState : PublicState = {
    user : null
}
export const PublicContext = createContext({} as PublicContextProps);
export const PublicProvider = ({children} : any)=>{

    const [state, dispatch] = useReducer(publicReducer, publicInitialState);
    useEffect(()=>{
        console.log("entra")
    },[])    


 
   const registro =async ({nombre} : PublicRegisterData)=>{

    try{
        const resp = await basicLearningSchoolApi.post('/auth/userGame/signup', {nombre})
        console.log(resp.data);
        const user = resp.data.datosUsuario;
        dispatch({
            type: 'registro',
            payload :{
                user
            }
        })

    }catch(error:any){
        console.log(error);
        const errorMessage = error.message;
        dispatch({type : 'addError', payload: errorMessage || 'información incorrecta'})
    }
   }
//    const  signUp = async ({nombre} : PublicRegisterData)=> {
//         try{
//             const resp = await dermatologiaApi.post('/auth/signup', {nombre, cedula, fecha_nacimiento, sexo, estado_civil, religion, ocupacion, lugar_nacimiento, residencia, domicilio, telefono, estado, imagen, username, email, password})
//             console.log(resp.data);
//             const token = resp.data.token;
//             const user = resp.data.datosUsuario;
//             dispatch({
//                 type: 'signUp',
//                 payload :{
//                     token ,
//                     user
//                 }
//             })

//             await AsyncStorage.setItem('token',token);
//         }catch(error:any){
//             console.log(error);
//             const errorMessage = error.message;
//             dispatch({type : 'addError', payload: errorMessage || 'información incorrecta'})
//         }
//     }

//     const logOut = async()=> {
//         await AsyncStorage.removeItem('token');
//         dispatch({type : 'logout'})
//     };
//     const removeError = ()=> {
//         dispatch({type : 'removeError'});
//     } 


    return (
        <PublicContext.Provider value = {{
            ...state,
            registro
        }}>
            {children}
        </PublicContext.Provider>
    )
}

