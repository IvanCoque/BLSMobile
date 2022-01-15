import React from 'react'
//Definir como luce que información tendré aquí
export interface AuthState {
    isLoggedIn : boolean;
    username? : string;
    favoriteIcon?: string
}
//Estado inicial

export const AuthContext = () => {
    return (
        <div>
            
        </div>
    )
}
