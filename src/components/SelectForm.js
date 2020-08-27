import React from 'react';

const SelectForm = () =>{
    function chooseDestination(e) {
        e.preventDefault();
        document.getElementById('start-page').style.display = "block";        
        document.getElementById('home-page').style.display = "none";

    }
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
                <button type="submit" className="choose-destination-button" onClick={chooseDestination} >Select</button>
            </form>
    )
}

export default SelectForm; 