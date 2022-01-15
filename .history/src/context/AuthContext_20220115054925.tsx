import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';
//Definir como luce que información tendré aquí
export interface AuthState {
    isLoggedIn : boolean;
    username? : string;
    favoriteIcon?: string
}
//Estado inicial

export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon : undefined
}

//Usaremos interfaz para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState : AuthState,
    signIn : () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor de estado

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    
    const signIn = () =>{
        
    }

    return (
        <AuthContext.Provider value = {{
            authState,
            signIn : () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )    
}