import React from 'react';

const Select = ({ handleChange, optionArray, autoFocus, name}) =>{
    return(
        <select 
            name = {name} 
            id = {name} 
            onChange={handleChange} 
            autoFocus = {autoFocus} 
        >     
        <option  value="">Choose {name}</option>
  
        {optionArray.map((option) => <option 
                                        value = {option.value? option.value: option.geonameid} 
                                        key = {option.id? option.id: option.geonameid} 
                                        id = {option.id? option.id: option.geonameid}>
                                            {option.name}
                                    </option>)
        }
                        
        </select>
    )
}

export default Select;