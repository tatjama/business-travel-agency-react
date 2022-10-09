import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getCitiesURL } from '../utils/constants';

const useFetchCities = ( setError, setIsLoading ) => {
    const {isUserAuthenticated} = useAppContext();
    const [cities, setCities] = useState([]);
  
    const fetchCities = async(id) =>{
        setError(null);  
        setIsLoading(true); 
   
        try {
             const response  = await fetch(getCitiesURL(id), {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES,
                    "x-rapidapi-key": isUserAuthenticated.rkcc
                }
            })
            const data = await response.json(); 

            if(response.status === 200){
                setCities(data.cities)
            }else{
                setError(data.error);
            }
    
        } catch (error) {
            setError(error)
        }

    setIsLoading(false);       
    }
    return { cities, fetchCities };
}

export default useFetchCities;
