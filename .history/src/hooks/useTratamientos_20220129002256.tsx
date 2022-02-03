import { useEffect } from "react";
import dermatologiaApi from "../api/dermatologiaApi";
import { Tratamiento } from "../interfaces/appInterfaces";

export const useTratamientos = ({_id}:string) => {
    const [tratamientos, setT ] = useState(initialState)
    const getTratamientos = async () =>{
        const resp = await  dermatologiaApi.get<Tratamiento>(`/api/tratamientos/historiaClinica/${_id}`);

    }
  return (
      <>
      </>
    )
};
