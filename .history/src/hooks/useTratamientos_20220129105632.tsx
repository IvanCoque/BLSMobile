import { useEffect, useState } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = ({_id}:any) => {
    const [tratamientos, setTratamientos ] = useState<Tratamiento>();
    const getTratamientos = async () =>{
        const historiaClinicaID = await dermatologiaApi.get<any,any>('http://localhost:5000/api/historiasClinicas/user/61a81a7b9eac42b78c24af28');
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
