import React from 'react';

const TransportationFrom = () =>{
    return(
        <div id="from">
        FROM:
        <br/>
        Country: 
        <input 
            list="countryFrom" 
            name="countryFrom" 
            id="fromCountry" 
            placeholder="Choose Country FROM" 
            autoFocus 
            required
        />
        <datalist id="countryFrom">       
            <option value="Serbia"/>
            <option value="Greece"/>
            <option value="Russia"/>
            <option value="USA"/>
        </datalist>
        <br/> <br/> 
        City :
        <input 
            list="cityFrom" 
            name="cityFrom" 
            placeholder="City from"/>
                <br/>
        <datalist id="cityFrom">
            <option value="Belgrade"/>
            <option value="Thessaloniki"/>
            <option value="Chicago"/>
            <option value="Moscow"/>
        </datalist>
    </div>
    )
}

export default TransportationFrom;