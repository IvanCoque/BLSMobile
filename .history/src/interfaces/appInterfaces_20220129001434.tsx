export interface LoginResponse {
    datosUsuario : Usuario ; 
    token: string;
}

export interface Usuario {
    nombre: string;
    cedula : string;
    fecha_nacimiento : string;
    sexo : boolean;
    estado_civil : string;
    religion : string
    ocupacion : string
    lugar_nacimiento : string
    residencia : string
    domicilio : string 
    telefono : string 
    fecha_actual : string 
    estado : boolean
    imagen : string
    username : string 
    email : string

}

export interface LoginData {
    email : string;
    password : string
}

/*
    INTERFAZ DE
*/
export interface RegisterData {
    nombre: string;
    cedula : string;
    fecha_nacimiento : string;
    sexo : boolean;
    estado_civil : string;
    religion : string
    ocupacion : string
    lugar_nacimiento : string
    residencia : string
    domicilio : string 
    telefono : string 
    estado : string
    imagen : string
    username : string 
    email : string
    password : string
}