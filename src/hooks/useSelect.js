import { cleanup } from '@testing-library/react';
import { useState, useEffect } from 'react';
//hooks
import useFetchCities from '../hooks/useFetchCities';
//utils
import { filterArrayByValue } from '../utils/helper';

const useSelect = (callback, countries, setError, setIsLoading) =>{
    const [country, setCountry] = useState(null);    
    const [city, setCity] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    let chosenCity = {}
       
 const handleSelectCountry = (e) =>{
      setCountry(filterArrayByValue(countries, e));     
 }

 const { cities, fetchCities } = useFetchCities(setError, setIsLoading)
 
 useEffect(() => {       
     country && fetchCities(country.id);        
     },[country])

 const handleSelectCity = (e) =>{   
     cities.map((city) => {
        if(city.geonameid === parseInt(e.target.value)){
            chosenCity = city;           
        }return chosenCity
     })
     
     setCity(chosenCity);
 }
 
 const handleSubmit =(e) => {
     e.preventDefault();
     setIsSubmitted(true)
 }
 useEffect(() => {
     if(Object.keys(city) !== 0 && isSubmitted){
         callback()
         cleanup(setIsSubmitted(false))
     }
 },[isSubmitted])

    return{
        countries,
        country,
        cities,
         city,
         handleSelectCountry,
         handleSelectCity,
         handleSubmit
    }
}

export default useSelect;

