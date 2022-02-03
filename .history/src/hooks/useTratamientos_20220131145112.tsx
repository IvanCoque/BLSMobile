import { useEffect, useState } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { HistoriaClinica, Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = ({_id}:any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tratamientos, setTratamientos ] = useState<Tratamiento>();
    const getTratamientos = async () =>{
        const historiaClinicaId = await dermatologiaApi.get<any,any>(`/historiasClinicas/user/${_id}`);
        const resp = await  dermatologiaApi.get<HistoriaClinica>(`/tratamientos/historiaClinica/${historiaClinicaId.data[0]._id}`);
        const tratamientos = resp.data;
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
