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
    const {isErrorCountries, isLoadingCountries, countries, fetchCountries}  = useFetchCountries();

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
                {isErrorCountries && <div className = "error">Error. We can't get the country...</div>}
                {isLoading || isLoadingCountries ?
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
                { isCities && <p className = "error-pop-up">
                    {country.name} doesn't have a city over 50,000 citizens.
                    <br/> Please select another country
                </p>}
            </form>
    )
}

export default SelectForm; 

