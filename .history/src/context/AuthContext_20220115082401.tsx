import React, {createContext} from 'react'
type AuthContextProps = {
    message: string;
    token: string | null;
    user: Usuario
}