import React from 'react';

const TransportationFrom = () =>{
    return(
        <div id="from">
        FROM:
        <br/>
        Country: 
        <input 
            list="countriesFrom" 
            name="countryFrom" 
            id="fromCountry" 
            placeholder="Choose Country FROM" 
            autoFocus 
            required
        />
        <datalist id="countriesFrom">       
            <option value="Serbia"/>
            <option value="Greece"/>
            <option value="Russia"/>
            <option value="USA"/>
        </datalist>
        <br/> <br/> 
        City :
        <input 
            list="citiesFrom" 
            name="cityFrom" 
            placeholder="City from"/>
                <br/>
        <datalist id="citiesFrom">
            <option value="Belgrade"/>
            <option value="Thessaloniki"/>
            <option value="Chicago"/>
            <option value="Moscow"/>
        </datalist>
    </div>
    )
}

export default TransportationFrom;