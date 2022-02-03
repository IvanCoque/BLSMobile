import { useEffect, useState } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = ({_id}:any) => {
    const [tratamientos, setTratamientos ] = useState<Tratamiento>();
    const getTratamientos = async () =>{
        const historiaClinicaId = await dermatologiaApi.get<any,any>(`/api/historiasClinicas/user/${_id}`);
        console.log('historia clinica id');
        console.log();
        const resp = await  dermatologiaApi.get<Tratamiento>(`/api/tratamientos/historiaClinica/${_id}`);
        const tratamientos = resp.data;
        setTratamientos(tratamientos);
    }
    useEffect(() => {
        getTratamientos();
    }, [])
  return (
      {tratamientos}
    )
};
