import React, {createContext, useReducer} from 'react'
import dermatologiaApi from '../api/dermatologiaApi';
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces'
import { authReducer, AuthState } from './authReducer';
type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status : 'checking' | 'authenticated' | 'not-authenticated'
    signUp : ()=> void
    signIn : ()=> void
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
    const resp = await dermatologiaApi.post<LoginResponse>('/auth/signin', {email, password})
    console.log(resp);
   }
    const logOut = ()=> {}
    const removeError = ()=> {} 
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

