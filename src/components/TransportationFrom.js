import React from 'react';
import Select from './Select';
import useSelect from './useSelect';

const TransportationFrom = () =>{
   const{countries, cities, handleSelectCity, handleSelectCountry} = useSelect();
    return(
        <div className = "destination" id="from">
        FROM:
        <br/>
        Country: 
        <Select
             handleChange = {handleSelectCountry}
             optionArray = {countries}
             autoFocus = {true}
             name = "fromCountries"
        />
        <br/> <br/> 
        City :
            <Select
                 handleChange = {handleSelectCity}
                 optionArray = {cities}
                 autoFocus = {false}
                 name = "fromCities"
            />
            
    </div>
    )
}

export default TransportationFrom;


