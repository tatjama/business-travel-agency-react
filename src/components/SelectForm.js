import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
//context
import {useAppContext} from '../libs/contextLib';
//components
import Select from './Select';
//hooks
import useSelect from '../hooks/useSelect';
//utils
import { getCountriesURL } from '../utils/constants';
import { mapperDictionaryToArray, sortedArrayByName } from '../utils/helper';


const SelectForm = () =>{
    const history = useHistory();
    const { isUserAuthenticated } = useAppContext();
    const [countries, setCountries] = useState([]);
    const [isErrorCountries, setIsErrorCountries] = useState(false);
    const [isLoadingCountries, setIsLoadingCountries] = useState(false);

  const fetchCountries = async() =>{
    setIsErrorCountries(false)  
    setIsLoadingCountries(true) 
   try {
    const data  = await fetch(getCountriesURL(), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST_COUNTRIES_CITIES,
            "x-rapidapi-key": isUserAuthenticated.rkcc
        }
    })
    const fetchCountries = await data.json(); 
    const mappedCountries = mapperDictionaryToArray(fetchCountries.countries); 
    setCountries(sortedArrayByName(mappedCountries));
   } catch (error) {
       setIsErrorCountries(true)
   }        
    setIsLoadingCountries(false)   
}

useEffect(() => {
  fetchCountries();
}, [])
 
    const {city, country, cities, handleSelectCountry, handleSelectCity, handleSubmit, isLoading, isError, isCities} 
    =  useSelect(submitted, countries);
    
     function submitted(){
      city && country ?  history.push(`/${country.name}-${city.name}`) : history.push('/life')
    }
    
    return(
        <form className="choose-destination" onSubmit = {handleSubmit}>    
        {countries.length > 1 && <Select 
                   handleChange = {handleSelectCountry}
                   optionArray = {countries}
                   autoFocus = {true}
                   name = "countries"
                />}
                        <br/>
                {isError && <div className = "error">Error. Something went wrong...</div>}
                {isLoading?
                    <div className = "loader"><Loader type="Grid" color="#bae7e7" height={40} width={40} /></div>
                :                
                <Select
                    handleChange = {handleSelectCity}
                    optionArray = {cities}
                    autoFocus = {false}
                    name = "cities"
                />
                }
                <br/>
                <button type="submit" className="choose-destination-button" >Select</button>
                { isCities && <p className = "error-pop-up">
                    {country.name} doesn't have a city over 100,000 citizens.
                    <br/> Please select another country
                </p>}
            </form>
    )
}

export default SelectForm; 

