import React from 'react';

const Select = (props) =>{
   console.log(props)   
    return(
        <select 
            name = {props.name} 
            id = {props.name} 
            onChange={props.handleChange} 
            autoFocus = {props.autoFocus} 
        >       
                        <option value={props.optionArray[0].value}>{props.optionArray[0].name}</option>
                        <option value={props.optionArray[1].value}>{props.optionArray[1].name}</option>
                        <option value={props.optionArray[2].value}>{props.optionArray[2].name}</option>
                        <option value={props.optionArray[3].value}>{props.optionArray[3].name}</option>
                        
        </select>
    )
}

export default Select;