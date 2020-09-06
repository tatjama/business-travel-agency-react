import React, {useState, useEffect} from 'react';
import Select from './Select';


const SelectForm = () =>{
       const [country, setCountry] = useState(countries[0]);
       const [cities, setCities] = useState(country.cities);
       const [city, setCity] = useState(country.cities[0]);

    const handleSelectCountry = (e) =>{        
         setCountry(countries[e.target.value]);
    }
    useEffect(() => {
            setCities(country.cities);
        },[country, cities])

    const handleSelectCity = (e) =>{
        setCity(cities[e.target.value]);
    }
    useEffect(() => {
        console.log(city)
    },[city])      
     
    function chooseDestination(e) {
        e.preventDefault();
        document.getElementById('start-page').style.display = "block";        
        document.getElementById('home-page').style.display = "none";
    }
    
    return(
        <form className="choose-destination">    
        <label htmlFor="countries"> Choose a country</label>             
                <Select 
                   handleChange = {handleSelectCountry}
                   optionArray = {countries}
                   autoFocus = {true}
                   name = "countries"
                />
                        <br/>
                <Select
                    handleChange = {handleSelectCity}
                    optionArray = {cities}
                    autoFocus = {false}
                    name = "cities"
                />
                <br/>
                <button type="submit" className="choose-destination-button" onClick={chooseDestination} >Select</button>
            </form>
    )
}

export default SelectForm; 

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

