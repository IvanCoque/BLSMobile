import { AuthState } from "./AuthContext";

type AuthAction { type: 'signIn'};
export const authReducer = (state : AuthState, action: AuthAction ) : AuthState => {
    switch () {
        case {action.type}:
            
            break;
    
        default:
            return state;
    }
}