export interface LoginResponse {
    datosUsuario : Usuario ; 
    token: string;
}

export interface Usuario {
    nombre: string;
    cedula : string;
    fecha_nacimiento : string
}