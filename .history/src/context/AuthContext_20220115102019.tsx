import React, {createContext, useReducer} from 'react'
import { AsyncStorage  from 'react-native';
import dermatologiaApi from '../api/dermatologiaApi';
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces'
import { authReducer, AuthState } from './authReducer';
type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status : 'checking' | 'authenticated' | 'not-authenticated'
    signUp : ()=> void
    signIn : (loginData: LoginData)=> void
    logOut : ()=> void
    removeError : ()=> void

}

const authInitialState : AuthState = {
    status : 'checking',
    token : null,
    user : null,
    errorMessage : ''
}

export const AuthContext = createContext({} as AuthContextProps);
export const AuthProvider = ({children} : any)=>{

    const [state, dispatch] = useReducer(authReducer, authInitialState);
    
    
   const  signUp = async ()=> {
        
   }
   const  signIn = async (obj : LoginData)=>{
        try{
            const {email, password} = obj
            const resp = await dermatologiaApi.post('/auth/signin', {email, password})
            console.log(resp.data);
            const token = resp.data.token;
            const user = resp.data.datosUsuario;
            dispatch({
                type: 'signUp',
                payload :{
                    token ,
                    user
                }
            })
        }catch(error:any){
            console.log(error);
            const errorMessage = error.message;
            dispatch({type : 'addError', payload: errorMessage || 'información incorrecta'})
        }
   }
    const logOut = ()=> {}
    const removeError = ()=> {
        dispatch({type : 'removeError'});


    } 
    return (
        <AuthContext.Provider value = {{
            ...state,
             signUp,
             signIn,
             logOut, 
             removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}

