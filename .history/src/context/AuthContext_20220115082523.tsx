import React, {createContext} from 'react'
import { Usuario } from '../interfaces/appInterfaces'
type AuthContextProps = {
    message: string;
    token: string | null;
    user: Usuario | null;
    status : 'checking' | 'authenticated' | 'not-authenticated'
    signUp : ()=> void
    signIn : ()=> void
    logOut : ()=> void
    signUp : ()=> void

}

