import { useEffect, useState } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = ({_id}:any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [historiasClinicas, setHistoriasClinicas ] = useState<Tratamiento>();
    const getHistoriasClinicas = async () =>{
        const historiasClinicasByUserId= await dermatologiaApi.get<any,any>(`/historiasClinicas/user/${_id}`);
        const historiasClinicas = historiasClinicasByUserId.data;
        setTratamientos(tratamientos);
        setIsLoading(false);
    }
    useEffect(() => {
        getTratamientos();
    }, [])
  return (
        {
            tratamientos,
            isLoading
        }
    )
};
