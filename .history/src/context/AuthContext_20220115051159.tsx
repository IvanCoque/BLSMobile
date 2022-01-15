import React, { createContext } from 'react'
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
    signIng : 
}

export const AuthContext = createContext({})
