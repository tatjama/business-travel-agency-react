import React from 'react';

const TransportationTo = () =>{
    return(
        <div id="to">
                            TO:
                            <br/> 
                            Country:
                            <input 
                                list="countryTo"
                                name="countryTo" 
                                id="toCountry" 
                                placeholder="Choose Country TO" 
                                required
                            />
                            <datalist id="countryTo">       
                                        <option value="Serbia"/>
                                        <option value="Greece"/>
                                        <option value="Russia"/>
                                        <option value="USA"/>
                            </datalist>
                            <br/> <br/> 
                            City :
                            <input list="cityTo" name="cityTo" placeholder="City to"/>
                            <br/>
                            <datalist id="cityTo">
                                        <option value="Belgrade"/>
                                        <option value="Thessaloniki"/>
                                        <option value="Chicago"/>
                                        <option value="Moscow"/>
                            </datalist>
                        </div>
    )
}

export default TransportationTo;