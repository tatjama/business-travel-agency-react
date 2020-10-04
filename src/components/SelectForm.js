import React from 'react';
import Select from './Select';
import useSelect from '../hooks/useSelect';
import {useHistory} from 'react-router-dom';


const SelectForm = () =>{
    const history = useHistory();
    const{city, countries, cities, handleSelectCountry, handleSelectCity, handleSubmit, isLoading, isError} 
    = useSelect(submitted);
    
     function submitted(){
         console.log('is submitted')
        console.log(city)
        history.push(`/${city.name}`)
    }

    
    return(
        <form className="choose-destination" onSubmit = {handleSubmit}>    
        <label htmlFor="countries"> Choose a country</label>             
                <Select 
                   handleChange = {handleSelectCountry}
                   optionArray = {countries}
                   autoFocus = {true}
                   name = "countries"
                />
                        <br/>
                {isError && <div className = "error">Error. Something went wrong...</div>}
                {isLoading?
                <div className = "loader"><p> Loading</p></div>
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
                
            </form>
    )
}

export default SelectForm; 

