import {useState, useEffect} from 'react';
import {countriesArray} from './data/countries';

const countries = countriesArray;


const useSelect = () =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState(country.cities);
    const [city, setCity] = useState(country.cities[0]);
    

 const handleSelectCountry = (e) =>{        
      setCountry(countries[e.target.value]);
 }
 useEffect(() => {
     console.log(country);
         setCities(country.cities);
     },[country, cities])

 const handleSelectCity = (e) =>{
     setCity(cities[e.target.value]);
 }
 useEffect(() => {
     console.log(city)
 },[city])      
 

    return{
        countries,
        country,
        cities,
         city,
         handleSelectCountry,
         handleSelectCity
    }

}

export default useSelect;

