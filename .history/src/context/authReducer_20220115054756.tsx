import { AuthState } from "./AuthContext";

type AuthAction { type: 'signIn'};
export const authReducer = (state : AuthState, action: AuthAction ) : AuthState => {
    switch (action.type) {
        case 'signIn':
            reutn
            break;
    
        default:
            return state;
    }
}