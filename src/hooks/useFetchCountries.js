import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getCountriesURL } from '../utils/constants';
import { mapperDictionaryToArray, sortedArrayByName } from '../utils/helper';

const useFetchCountries = (setError, setIsLoading) => {
const {isUserAuthenticated} = useAppContext();
const [countries, setCountries] = useState([]);
    
    const fetchCountries = async() =>{
        setError(null)  
        setIsLoading(true) 
       try {
        const response  = await fetch(getCountriesURL(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES,
                "x-rapidapi-key": isUserAuthenticated.rkcc
            }
        })
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