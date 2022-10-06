import { cleanup } from '@testing-library/react';
import { useState, useEffect } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils
import { getCitiesURL } from '../utils/constants';
import { countriesArray } from '../components/data/countries.json';

const countries = countriesArray;

const useSelect = (callback) =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({geonameid: 1141857, name: "Gardez"});
    const [isCities, setIsCities] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {isUserAuthenticated} = useAppContext()
    let chosenCity = {}
          
 const handleSelectCountry = (e) =>{        
      setCountry(countries[e.target.value]);
      
 }
 useEffect(() => {  
     const fetchCities = async(id) =>{
        setIsError(false)  
        setIsLoading(true) 
       try {
        const data  = await fetch(getCitiesURL(id), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES,
                "x-rapidapi-key": isUserAuthenticated.rkcc
            }
        })
        const cities = await data.json();    
        if(cities.cities.length === 0){
            setIsCities(true)
        }else{
            setIsCities(false)
        }
        setCities(cities.cities)
       } catch (error) {
           setIsError(true)
       }
            
        setIsLoading(false)   
    }
     fetchCities(country.id);
        
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
         handleSubmit,
         isLoading,
         isError, 
         isCities
    }

}

export default useSelect;

