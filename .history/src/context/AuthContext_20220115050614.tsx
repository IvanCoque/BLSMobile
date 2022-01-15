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

export const AuthContext = createContext({}) => {
    return (
        <div>
            
        </div>
    )
}
