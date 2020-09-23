import {useState, useEffect} from 'react';
import {countriesArray} from './data/countries';

const countries = countriesArray;


const useSelect = () =>{
    const [country, setCountry] = useState(countries[0]);    
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({});
    let chosenCity = {}

    const fetchCities = async(id) =>{
        const data  = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${id}
        /city/list?page=1&per_page=20&format=json&population=100001`
        , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countries-cities.p.rapidapi.com",
                "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
            }
        })
        const cities = await data.json();
        console.log(cities)
        setCities(cities.cities)
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

