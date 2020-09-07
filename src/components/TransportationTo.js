import React from 'react';
import Select from './Select';
import useSelect from './useSelect';

const TransportationTo = () =>{
   const{countries, cities, handleSelectCity, handleSelectCountry} = useSelect();

    return(
        <div className = "destination" id="to">
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
             optionArray = {cities}
             autoFocus = {false}
             name = "toCities"
        />
     </div>
    )
}

export default TransportationTo;

