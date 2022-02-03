import { useEffect } from "react";
import dermatologiaApi from "../api/dermatologiaApi";

export const useTratamientos = ({id}:string) => {
    useEffect(() => {
        dermatologiaApi.get<Tratamiento>(`/api/tratamientos/historiaClinica/${_id}`)
    }, [])
  return (
      <>
      </>
    )
};
