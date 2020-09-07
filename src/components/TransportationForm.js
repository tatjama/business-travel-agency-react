import React from 'react';
import TransportationFrom from './TransportationFrom';
import TransportationTo from './TransportationTo';
import TransportationType from './TransportationType';

const TransportationForm = () =>{
    function showTransportation(){
        alert('show transportation')
    }
    return(
        <form id="formTransportation">
            <fieldset>
                <legend>Transportation</legend>
                    <div id="transportationFromTo">
                        <TransportationFrom/>
                        <TransportationTo/>
                        <TransportationType/>
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

