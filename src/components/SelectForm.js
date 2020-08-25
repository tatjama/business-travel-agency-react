import React from 'react';

const SelectForm = () =>{
    return(
        <form className="choose-destination">                 
                <select className="nameCountry" >       
                        <option value="1">Serbia</option>
                        <option value="2">Greece</option>
                        <option value="3">Russia</option>
                        <option value="4">USA</option>
                        </select>
                        <br/>
                <select className="nameCity" >
                            <option value="1">Belgrade</option>
                            <option value="2">Thesaloniki</option>
                            <option value="3">Chicago</option>
                            <option value="4">Moscow</option>
                        </select>
                <br/>
                <button className="choose-destination-button">Select</button>
            </form>
    )
}

export default SelectForm; 