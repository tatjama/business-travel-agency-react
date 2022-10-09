import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getAirportsInformationURL, header } from '../utils/constants';

const useFetchAirports = ( setError, setIsLoading, callback ) => {
    const { isUserAuthenticated } = useAppContext();
    const [airports, setAirports] = useState([]);

    const fetchAirportsInformation = async(name) =>{
        setError(false)
        setIsLoading(true)
        try {
            const response = await fetch(getAirportsInformationURL(name), 
            header(process.env.REACT_APP_RAPID_API_HOST, isUserAuthenticated.rk)  )
            const data = await response.json();
            if(response.status === 200){
                setAirports(data);
            }else {
                setError(data)
            }
        
            callback();

            } catch (error) {
                setError(error);
            }
            
        setIsLoading(false)
    }

    return { airports, fetchAirportsInformation }

}

export default useFetchAirports;