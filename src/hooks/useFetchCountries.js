import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getCountriesURL } from '../utils/constants';
import { mapperDictionaryToArray, sortedArrayByName } from '../utils/helper';

const useFetchCountries = () => {
const {isUserAuthenticated} = useAppContext();
const [isErrorCountries, setIsErrorCountries] = useState(false);
const [isLoadingCountries, setIsLoadingCountries] = useState(false);
const [countries, setCountries] = useState([]);
    
    const fetchCountries = async() =>{
        setIsErrorCountries(false)  
        setIsLoadingCountries(true) 
       try {
        const data  = await fetch(getCountriesURL(), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES,
                "x-rapidapi-key": isUserAuthenticated.rkcc
            }
        })
        const fetchCountries = await data.json(); 
        const mappedCountries = mapperDictionaryToArray(fetchCountries.countries); 
        setCountries(sortedArrayByName(mappedCountries));
       } catch (error) {
           setIsErrorCountries(true)
       }        
        setIsLoadingCountries(false)   
    }

    return{isErrorCountries, isLoadingCountries, countries, fetchCountries}
}

export default useFetchCountries;