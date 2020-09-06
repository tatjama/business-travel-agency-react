import React from 'react'

const SelectCities = (props) =>{
    console.log(props)
    return(
        <select className="nameCity" name = "cities" id="cities" onChange={props.handleChange} autoFocus >       
                        <option value={props.cities[0].value}>{props.cities[0].name}</option>
                        <option value={props.cities[1].value}>{props.cities[1].name}</option>
                        <option value={props.cities[2].value}>{props.cities[2].name}</option>
                        <option value={props.cities[3].value}>{props.cities[3].name}</option>
                        
        </select>
    )
}

export default SelectCities