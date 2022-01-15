export interface AuthState {
    status : 'checking' |'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage : string 
    user : Usuario | null
}

import { Usuario } from "../interfaces/appInterfaces";

type AuthAction =  
    | { type: 'signUp', payload : {token: string, user: Usuario}}
    | {type: 'addError', payload: string}
    | {type : 'removeError'}

export const authReducer = (state : AuthState, action: AuthAction ) : AuthState => {
    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username : 'Marco'
            }
            break;
    
        default:
            return state;
    }
}