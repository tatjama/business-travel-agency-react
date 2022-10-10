import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
//components
import Select from './Select';
//hooks
import useSelect from '../hooks/useSelect';
//utils
import useFetchCountries from './../hooks/useFetchCountries';

const SelectForm = () =>{
    const history = useHistory(); 
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
      
    const { countries, fetchCountries}  = useFetchCountries(setError, setIsLoading);

    useEffect(() => {
        fetchCountries();
    }, [])
 
    const {city, country, cities, handleSelectCountry, handleSelectCity, handleSubmit} 
    =  useSelect(submitted, countries, setError, setIsLoading);
    
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
                {isLoading ?
                    <div className = "loader">
                        <Loader type="Grid" color="#bae7e7" height={40} width={40} />
                    </div>
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
                {error && <p className = "error-pop-up">Error: {error.detail} {error.code}...{error.message}</p>}
               
            </form>
    )
}

export default SelectForm; 

