import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Shop = () =>{
    let i = 0;
    const [countryArray, setCountryArray] = useState([])
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState({})
    const [isMounted, setIsMounted] = useState(true)
    let newArray = [];
    
// COUNTRIES:  RS-Serbia , MK- Macedonia, ME - Monte Negro, BA - Bosnia and Hercegovina, GR - Greece
// CITIES: population> 100.000

const onLoad = () => {
    const fetchCountries = async() => {
        const data = await
        fetch("https://countries-cities.p.rapidapi.com/location/country/list?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "countries-cities.p.rapidapi.com",
		"x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	}
})
    const countries = await data.json();
    setCountries(countries.countries);    
    }
    fetchCountries()
}

    useEffect(() => {
        if(isMounted){
        console.log("load")
        onLoad()}
        
    }, [])

    
    useEffect(() => {        
        Object.entries(countries).map(([key, value]) => {                 
            let country = {value: i++, id: key, name: value, cities: [
                {value: 0, id: "country2-city0", name: "Belgrade"}, 
                {value: 1, id: "country2-city1", name: "Nis"},
                {value: 2, id: "country2-city2", name: "Kraljevo"}, 
                {value: 3, id: "country2-city3",  name: "Novi Sad"}, 
                {value: 4, id: "country2-city4",  name: "Valjevo"}, 
                {value: 5, id: "country2-city5",  name: "Cacak"}
            ]}
           // console.log(key)
            //console.log(value)
            setCountry(country)
            //console.log(country)    
            newArray.push(country) 
            //console.log(newArray)     
            return(newArray) 
        })
        setCountryArray(newArray);
        console.log(newArray)
    }, [countries])

    
    const fetchCities = async() =>{
        const data  = await fetch("https://countries-cities.p.rapidapi.com/location/country/RU/city/list?page=1&per_page=20&format=json&population=100001", {
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
    
    

    return(
        <div>
            
            <button onClick = {fetchCities}>Cities</button>
            { 
            countryArray.map((country) => {
                return(
                    <div key = {country.id}>
                      <p>  value: {country.value},</p>
                       <p>  id: {country.id}, </p>
                        <p> name: {country.name}, </p>
                        <p> cities: [</p>
                      <p>  value: 0, id: "country2-city0", name: "Belgrade", </p>
                      <p>value: 1, id: "country2-city1", name: "Nis",</p>
                      <p>value: 2, id: "country2-city2", name: "Kraljevo", </p>
                      <p>value: 3, id: "country2-city3",  name: "Novi Sad", </p>
                      <p>value: 4, id: "country2-city4",  name: "Valjevo", </p>
                      <p>value: 5, id: "country2-city5",  name: "Cacak"</p>
                    <p>]</p>
                       
                    </div>
                )
            })
            }
            
           {cities.map((city)=>{
               return(
                   <Link key = {city.geonameid} to={`/shop/${city.name}`}>
                  <h2 >{city.name}</h2> 
                  </Link>
               )
           })} 
        </div>
    )
}

export default Shop;