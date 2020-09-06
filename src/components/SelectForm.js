import React from 'react';
import Select from './Select';

const SelectForm = () =>{
    const countries = [
        {
            value: 1,
            name: "Greece"
        },        
        {
            value: 2,
            name: "Russia"
        },
        {
            value: 3,
            name: "Serbia"            
        },
        {
            value: 4,
            name: "USA"
        }
    ]
    function chooseDestination(e) {
        e.preventDefault();
        document.getElementById('start-page').style.display = "block";        
        document.getElementById('home-page').style.display = "none";

    }
    return(
        <form className="choose-destination">                 
                <Select
                    country1 = {countries[0]}
                    country2 = {countries[1]}
                    country3 = {countries[2]}
                    country4 = {countries[3]}
                />
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