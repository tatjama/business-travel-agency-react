import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getCountriesURL, header } from '../utils/constants';
import { mapperDictionaryToArray, sortedArrayByName } from '../utils/helper';

const useFetchCountries = (setError, setIsLoading) => {
const {isUserAuthenticated} = useAppContext();
const [countries, setCountries] = useState([]);
    
    const fetchCountries = async() =>{
        setError(null)  
        setIsLoading(true) 

       try {
        const response  = await fetch(getCountriesURL(), 
        header(process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES, isUserAuthenticated.rkcc))
        const data = await response.json(); 
        if(response.status === 200) {
           const mappedCountries = mapperDictionaryToArray(data.countries); 
            setCountries(sortedArrayByName(mappedCountries));
        }else {
            setError(data)
        }
       } catch (error) {
           setError(error)
       }        
        setIsLoading(false)   
    }

    return{ countries, fetchCountries}
}

export default useFetchCountries;