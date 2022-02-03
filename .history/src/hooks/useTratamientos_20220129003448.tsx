import { useEffect, useState } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = () => {
    const [tratamientos, setTratamientos ] = useState<Tratamiento>();
    const getTratamientos = async () =>{
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
