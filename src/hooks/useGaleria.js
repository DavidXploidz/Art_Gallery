import { useContext } from "react";
import GaleriaContext from '../context/GaleriaProvider'


const useGaleria = () => {

    return useContext(GaleriaContext)

}

export default useGaleria