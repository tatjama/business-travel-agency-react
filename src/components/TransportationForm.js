import React from 'react';

const TransportationForm = () =>{
    function showTransportation(){
        alert('show transportation')
    }
    return(
        <form id="formTransportation">
            <fieldset>
                <legend>Transportation</legend>
                    <div id="transportationFromTo">
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
                        <div id="type">
                            Transportation Type
                            <br/> 
                            <input type="radio" name="transportationType" id="airplane"/>
                            <span>Airplane    </span>
                            <br/>                        
                            <input type="radio" name="transportationType" id="bus"/>
                            <span>BUS</span>
                            <br/> 
                            <input type="radio" name="transportationType" id="companyCar"/>
                            <span>Company car    </span>
                            <br/>                        
                            <input type="radio" name="transportationType" id="rentACar"/>
                            <span>Rent a car</span>
                            <br/>
                            <input type="radio" name="transportationType" id="train"/>
                            <span>Train   </span>
                            <br/>                        
                            <input type="radio" name="transportationType" id="taxi"/>
                            <span>Taxi</span>
                        </div>
                        <div>
                            <br/><br/>
                            <button type="submit" onClick={showTransportation}>Submit</button>
                            <button type="reset">Clear</button>
                        </div>
                   </div>
            </fieldset>
        </form>
    )
}

export default TransportationForm;