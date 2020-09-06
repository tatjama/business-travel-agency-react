import React from 'react';

const Select = (props) =>{
   // const countries = props.countries;
   //let selectedValue = 2;
   console.log(props)
   

   
    return(
        <select className="nameCountry" name = "countries" id="countries" onChange={props.handleChange} autoFocus >       
                        <option value={props.countries[0].value}>{props.countries[0].name}</option>
                        <option value={props.countries[1].value}>{props.countries[1].name}</option>
                        <option value={props.countries[2].value}>{props.countries[2].name}</option>
                        <option value={props.countries[3].value}>{props.countries[3].name}</option>
                        
        </select>
    )
}

export default Select;