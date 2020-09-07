import React, {useState, useEffect} from 'react';
import Select from './Select';

const TransportationTo = () =>{
    const [countryTo, setCountryTo] = useState(countries[0]);
       const [citiesTo, setCitiesTo] = useState(countryTo.cities);
       const [cityTo, setCityTo] = useState(countryTo.cities[0]);

    const handleSelectCountry = (e) =>{        
         setCountryTo(countries[e.target.value]);
    }
    useEffect(() => {
            setCitiesTo(countryTo.cities);
        },[countryTo, citiesTo])

    const handleSelectCity = (e) =>{
        setCityTo(citiesTo[e.target.value]);
    }
    useEffect(() => {
        console.log(cityTo)
    },[cityTo])
 
    return(
        <div id="to">
             TO:
        <br/> 
          Country:
         <Select
             handleChange = {handleSelectCountry}
             optionArray = {countries}
             autoFocus = {false}
             name = "toCountries"
        />                            
                             <br/> <br/> 
         City :
         <Select
             handleChange = {handleSelectCity}
             optionArray = {citiesTo}
             autoFocus = {false}
             name = "toCities"
        />
     </div>
    )
}

export default TransportationTo;

const countries = [
    {
        value: 0,
        name: "Greece",
        id: "country0",
        cities: [
            {value: 0, id: "country0-city0", name: "Thessaloniki"}, 
            {value: 1, id: "country0-city1", name: "Athene"},
            {value: 2, id: "country0-city2", name: "Chaniotis"}, 
            {value: 3, id: "country0-city3",  name: "Rhodes"}
            
        ]
    },        
    {
        value: 1,
        name: "Russia",
        id: "country1",
        cities: [
            {value: 0, id: "country1-city0", name: "Moscow"}, 
            {value: 1, id: "country1-city1", name: "Saint Petersburg"},
            {value: 2, id: "country1-city2", name: "Astrakhan"}, 
            {value: 3, id: "country1-city3",  name: "Yakutsk"}
        ]
    },
    {
        value: 2,
        name: "Serbia",  
        id: "country2" ,
        cities: [
            {value: 0, id: "country2-city0", name: "Belgrade"}, 
            {value: 1, id: "country2-city1", name: "Nis"},
            {value: 2, id: "country2-city2", name: "Kraljevo"}, 
            {value: 3, id: "country2-city3",  name: "Novi Sad"}, 
            {value: 4, id: "country2-city3",  name: "Valjevo"}, 
            {value: 5, id: "country2-city4",  name: "Cacak"}
        ]         
    },
    {
        value: 3,
        name: "USA",
        id: "country3",
        cities:  [
            {value: 0, id: "country3-city0", name: "Washington"}, 
            {value: 1, id: "country3-city1", name: "Chicago"},
            {value: 2, id: "country3-city2", name: "Los Angeles"}, 
            {value: 3, id: "country3-city3",  name: "NewYork"}
        ]
    }
] 

