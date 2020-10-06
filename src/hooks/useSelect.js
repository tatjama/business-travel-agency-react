import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react';
import {countriesArray} from '../components/data/countries.json';

const countries = countriesArray;
//const countries = array.sort((a, b) => a.name.localeCompare(b.name))
//console.log(countries)

const useSelect = (callback) =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({geonameid: 1141857, name: "Gardez"});
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    let chosenCity = {}
    //const rapidKey = "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411";
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470";       
    console.log(country)

 const handleSelectCountry = (e) =>{        
      setCountry(countries[e.target.value]);
      
 }
 useEffect(() => {
     console.log(country);  
     const fetchCities = async(id) =>{
        setIsError(false)  
        setIsLoading(true) 
       try {
        const data  = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${id}
        /city/list?page=1&per_page=20&format=json&population=100001`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countries-cities.p.rapidapi.com",
                "x-rapidapi-key": rapidKey
            }
        })
        const cities = await data.json();
       // console.log(cities.cities.length);
        console.log(cities)
        await setCities(cities.cities)
        console.log(cities)  
       } catch (error) {
           setIsError(true)
       }
            
        setIsLoading(false)   
    }
     fetchCities(country.id);
     //ERROR HANDLE     
     //!cities? alert("Nema grada"):
     // setCities(cities);
    // console.log(cities)
        
     },[country])

 const handleSelectCity = (e) =>{     
     console.log(e.target.value)
     console.log(cities)
     cities.map((city) => {
        // console.log(city.geonameid)
         //console.log(e.target.value)
        if(city.geonameid === parseInt(e.target.value)){
            chosenCity = city;           
        }return chosenCity
     })
     
     setCity(chosenCity);
 }
 useEffect(() => {
     console.log(city)
 },[city])      

 const handleSubmit =(e) => {
     console.log("useState submit")
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
         isError
    }

}

export default useSelect;
