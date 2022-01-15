import React, {createContext} from 'react'
import { Usuario } from '../interfaces/appInterfaces'
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
export const AuthContext = createContext({} as AuthContextProps);
export const AuthProvider = ({children} : any)=>{

    useReduc
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

