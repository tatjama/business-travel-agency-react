import React, {useState, useEffect} from 'react';
import Select from './Select';
import SelectCities from './SelectCities';


const SelectForm = () =>{
    const countries = [
        {
            value: 0,
            name: "Greece"
        },        
        {
            value: 1,
            name: "Russia"
        },
        {
            value: 2,
            name: "Serbia"            
        },
        {
            value: 3,
            name: "USA"
        }
    ]
    const cities = [
         ["Thessaloniki", "Athene", "Chaniotis", "Rhodes"],
         ["Moscow", "Saint Petersburg", "Astrakhan", "Yakutsk"],
         ["Belgrade", "Nis", "Novi Sad", "Valjevo", "Cacak"],
         ["Washington", "Chicago", "Los Angeles", "NewYork"]
    ]
    /*const cities = [
        {"Greece": ["Thessaloniki", "Athene", "Chaniotis", "Rhodes"]},
        {"Russia": ["Moscow", "Saint Petersburg", "Astrakhan", "Yakutsk"]},
        {"Serbia": ["Belgrade", "Nis", "Novi Sad", "Valjevo", "Cacak"]},
        {"USA": ["Washington", "Chicago", "Los Angeles", "NewYork"]}
    ]*/
   // const [country, setCountry] = useState({value: 2,name: "Serbia" });
   // const [city, setCity] = useState(cities[2])
   
   /* const handleOnChangeSelect = (e) =>{
       
        console.log(e.target.value);
        useState((country)=>{
            console.log(e.target.value)
            country = countries.filter((country) =>{
                country.value == e.target.value
            }) 
            })
            console.log(country)
        }*/
        
       /*s let name, city = '';
        switch(e.target.value){
            case "0":  name = "Greece" ; city = cities[0];  break;
            case "1": name = "Russia"; city = cities[1]; break;
            case "2": name = "Serbia"; city = cities[2]; break;
            case "3": name = "USA"; city = cities[3]; break;
            default : name = "def"; break;
        }*/
       // console.log(name, city)
       // alert('You select ' +e.target.value + " option, name " )
       const [country, setCountry] = useState({})
       const handleOnChangeSelect = (e) =>{
        /*selectedValue = e.target.value
         console.log(selectedValue)
         console.log(props.countries[selectedValue])*/
         setCountry(countries[e.target.value])
        console.log(country)
    }
    useEffect(() => {
       console.log(country)
    },[country])
     
    function chooseDestination(e) {
        e.preventDefault();
        document.getElementById('start-page').style.display = "block";        
        document.getElementById('home-page').style.display = "none";
    }
    return(
        <form className="choose-destination">    
        <label htmlFor="countries"> Choose a country</label>             
                <Select handleChange = {handleOnChangeSelect}
                   countries = {countries}
                />
                        <br/>
                <SelectCities
                    cities = {cities}
                />
                <br/>
                <button type="submit" className="choose-destination-button" onClick={chooseDestination} >Select</button>
            </form>
    )
}

export default SelectForm; 