import { useEffect } from "react";
import dermatologiaApi from "../api/dermatologiaApi";

export const useTratamientos = ({_id}:S) => {
    useEffect(() => {
        dermatologiaApi.get<Tratamiento>(`/api/tratamientos/historiaClinica/${}`)
    }, [])
  return (
      <>
      </>
    )
};
