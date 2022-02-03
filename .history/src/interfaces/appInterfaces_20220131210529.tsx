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
    INTERFAZ DE TRATAMIENTO
*/

export interface IdUsuario {
    _id: string;
    nombre: string;
    imagen: string;
}

export interface IdHistoriaClinica {
    _id: string;
    motivo_consulta: string;
    diagnostico: string;
    id_usuario: IdUsuario;
}

export interface Tratamiento {
    _id: string;
    nombre: string;
    descripcion: string;
    foto: string;
    fechaActual: Date;
    id_historia_clinica: IdHistoriaClinica;
}

/*
    INTERFACES DE HISTORIA CLINICA
*/

export interface HistoriaClinica {
    _id: string;
    motivo_consulta: string;
    antecedentes_patologia: string;
    antecedentes_personales: string;
    antecedentes_patologicos_familiares: string;
    medicacion_actual_continua: string;
    tratamientos_anteriores: string;
    examen_fisico: string;
    diagnostico: string;
    tratamiento_actual: string;
    parte_cuerpo_seleccionado: string;
    id_usuario: string;
    createdAt: Date;
    updatedAt: Date;
}

/*
    INTERFACES DE MENU 
*/
export interface MenuItem {
    _id : string;
    name: string;
    icon: string;
    route : string;
}