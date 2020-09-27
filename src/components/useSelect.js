import {useState, useEffect} from 'react';
import {countriesArray} from './data/countries';

const countries = countriesArray;


const useSelect = (callback) =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)
    let chosenCity = {}
    //const rapidKey = "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411";
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470";

    const fetchCities = async(id) =>{
        const data  = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${id}
        /city/list?page=1&per_page=20&format=json&population=100001`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countries-cities.p.rapidapi.com",
                "x-rapidapi-key": "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
            }
        })
        const cities = await data.json();
       // console.log(cities.cities.length);
        console.log(cities)
        await setCities(cities.cities)
        console.log(cities)        
    }
    
   
    

 const handleSelectCountry = (e) =>{        
      setCountry(countries[e.target.value]);
 }
 useEffect(() => {
     console.log(country);     
     fetchCities(country.id);
     //ERROR HANDLE     
     //!cities? alert("Nema grada"):
         setCities(cities);
         console.log(cities)
     },[country])

 const handleSelectCity = (e) =>{
     
     console.log(e.target.value)
     console.log(cities)
     cities.map((city) => {
        // console.log(city.geonameid)
         //console.log(e.target.value)
        if(city.geonameid == e.target.value){
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

