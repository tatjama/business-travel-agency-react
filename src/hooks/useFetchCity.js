import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getCityInformationURL, header} from '../utils/constants';

const useFetchCity = ( setError, setIsLoading, callback ) => {
    const { isUserAuthenticated } = useAppContext();
    const [info, setInfo] = useState(null);

    const fetchCityInformation = async(city) =>{
        setError(null)
        setIsLoading(true)
        try {            
        const response = await fetch(getCityInformationURL(city), 
        header(process.env.REACT_APP_RAPID_API_HOST, isUserAuthenticated.rk));               
               const data = await response.json();
               if(response.status === 200){
                setInfo(data.data);               
                callback();
               }else {
                setError(data.data)
               }
                           
        } catch (error) {
            setError(error)
        }             
        setIsLoading(false)    
           
    }

    return { info, fetchCityInformation }
}

export default useFetchCity;