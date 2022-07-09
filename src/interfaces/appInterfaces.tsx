export interface LoginResponse {
    datosUsuario : Usuario ; 
    token: string;
}

export interface PublicUsuario {
    _id : string;
    nombre : string;
}

export interface PublicRegisterData{
    nombre : string;
}

export interface PublicData {
    _id : string;
    nombre: string; 
    fecha_actual : string|null;
    estado : boolean;
    imagen : string |null;

}
export interface Usuario {
    _id : string;
    nombre: string; 
    fecha_actual : string 
    estado : boolean
    imagen : string | null
    username : string 
    email : string

}

export interface LoginData {
    email : string;
    password : string
}



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


/*
    INTERFAZ DE PERSONAJE
*/

export interface Character{
    id: string,
    side: Side,
    url : string,

}
export interface Side {
    frontSide : string,
    backSide : string,
    leftSide : string,
    rightSide : string
}
