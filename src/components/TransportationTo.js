import React from 'react';

const TransportationTo = () =>{
    return(
        <div id="to">
                            TO:
                            <br/> 
                            Country:
                            <input 
                                list="countriesTo"
                                name="countryTo" 
                                id="toCountry" 
                                placeholder="Choose Country TO" 
                                required
                            />
                            <datalist id="countriesTo">       
                                        <option value="Serbia"/>
                                        <option value="Greece"/>
                                        <option value="Russia"/>
                                        <option value="USA"/>
                            </datalist>
                            <br/> <br/> 
                            City :
                            <input list="citiesTo" name="cityTo" placeholder="City to"/>
                            <br/>
                            <datalist id="citiesTo">
                                        <option value="Belgrade"/>
                                        <option value="Thessaloniki"/>
                                        <option value="Chicago"/>
                                        <option value="Moscow"/>
                            </datalist>
                        </div>
    )
}

export default TransportationTo;