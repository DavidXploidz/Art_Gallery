import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const GaleriaContext = createContext()

const GaleriaProvider = ({children}) => {

    useEffect(() => {
        consultarAPI();
    },[])

    const [piezas, setPiezas] = useState([]);

    const consultarAPI = async () => {
        const url = "https://api.artic.edu/api/v1/artworks";
        const {data} = await axios(url);
        setPiezas(data.data);
    }

    return(
        <GaleriaContext.Provider 
            value={{
                piezas
            }} 
        >
            {children}
        </GaleriaContext.Provider>
    )
}



export {
    GaleriaProvider
}

export default GaleriaContext