import React from 'react';

const Select = (props) =>{
   // const countries = props.countries;
   console.log(props)
   const handleOnChangeSelect = (e) =>{
       console.log(e.target.value);
       let name = '';
       switch(e.target.value){
           case "1":  name = "Greece" ;break;
           case "2": name = "Russia"; break;
           case "3": name = "Serbia"; break;
           case "4": name = "USA"; break;
           default : name = "def"; break;
       }
       console.log(name)
       alert('You select ' +e.target.value + " option, name " + name )
   }

    return(
        <select className="nameCountry" onChange={handleOnChangeSelect} autoFocus >       
                        <option value={props.country1.value} name = {props.country1.name}>{props.country1.name}</option>
                        <option value={props.country2.value} name = {props.country2.name}>{props.country2.name}</option>
                        <option value={props.country3.value} name = {props.country3.name}>{props.country3.name}</option>
                        <option value={props.country4.value} name = {props.country4.name}>{props.country4.name}</option>
                        
        </select>
    )
}

export default Select;