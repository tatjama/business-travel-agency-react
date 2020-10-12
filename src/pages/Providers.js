import React, {useEffect, useState} from 'react';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import logoAirSerbia from '../images/logoavio1.webp';
import logoAeroflot from '../images/aeroflot.png';
import logoWizz from '../images/wizz.png';
import ProviderInfo from '../components/ProviderInfo';


const Providers = ()=>{
    const [newProvider, setNewProvider] = useState(false)
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)

    function showNewProviderForm() {
        (newProvider === false)? setNewProvider(true): setNewProvider(false)
    }

   
    const providersInfoArray = [
        {   id: "airserbia",
            name: "Air Serbia",
            type: "Airplane",
            rating: "5",
            num_review: "350",
            country: "Serbia",
            city: "Belgrade",
            address: "Bulevar Kralja Aleksandra 17",
            phone: "+381 11 311 21 23",
            contact: "0800 111 528",
            text: `Air Serbia has been a leader in air transport since the company was founded in 1927.
            Now, with a new name and a new identity, we can offer a new concept of in-flight 
            comfort across our growing network of lines.<br/>
            Air Serbia already flies to a total of 63 destinations in Europe, the Mediterranean, 
            the Middle East, North America and Africa, both in passenger and freight traffic.<br/>
            We also offer flights to international destinations in Asia, Australia, North America
             and Africa through Etihad Airways and our other partner airlines.<br/>
             Air Serbia has been a member of the International Air Transport Association 
             (IATA) since 1961.`
        },
        {   id: "wizzair",
            name: "Wizz Air",
            type: "Airplane",
            rating: "5",
            num_review: "450",
            country: "Hungary",
            city: "Budapest",
            address: "Kőér street 2/A, Building B, H-1103",
            phone: "06 90 900 555",
            contact: "0900 232 321",
            text: `Wizz Air is continuously looking for opportunities to expand its network of destinations and provide low-cost air transport. We are committed to achieving the lowest cost base in the Central and Eastern European region and airport choice has a crucial impact. This is why we fly to a mix of primary, secondary and regional airports, providing friendly and fast customer service for low costs, which are reflected in WIZZ fares. We are in constant negotiations to establish a network of operations at more airports.`
        },
        {   id: "aeroflot",
            name: "Aeroflot",
            type: "Airplane",
            rating: "5",
            num_review: "550",
            country: "Russia",
            city: "Moscow",
            address: "1st Tverskaya-Yamskaya Str., 32",
            phone: "+7 (495) 223-55-55",
            contact: "8 (800) 444-55-55",
            text: `We work to ensure that our customers can quickly and comfortably travel great distances, and thus be mobile, meet more often, work successfully and see the world in all its diversity.
            We give our customers a choice through an extensive route network and different carriers operating within our Group, from low cost to premium class airlines.`
        }
    ]
     
    return(
        <div className="page-providers">
            <header className="header" id="header-providers" >
            <div id="message" style={{"color": "rgb(52, 87, 128)"}}></div>
            <Button
                name = "New Provider Form"
                handleOnClick = {showNewProviderForm}
            />
            </header>

            <div className="wrapper">
                
                <div id="showTransportation">
                {newProvider 
                && <div className = "middle-wrapper">
                        <h1>Add new provider:</h1>
                            <div className="provider-div ">
                                <ProviderDetailForm/>
                            </div>
                    </div>
                }
                    <h1>Provider list:</h1>
                    <ProviderInfo
                        image = {logoAirSerbia}
                        info = {providersInfoArray[0]}
                        key = {providersInfoArray[0].id}
                        id = {providersInfoArray[0].id}
                    />
                    <ProviderInfo
                        image = {logoWizz}
                        info = {providersInfoArray[1]}
                        key = {providersInfoArray[1].id}
                        id = {providersInfoArray[1].id}
                    />
                    <ProviderInfo
                        image = {logoAeroflot}
                        info = {providersInfoArray[2]}
                        key = {providersInfoArray[2].id}
                        id = {providersInfoArray[2].id}
                    />
                    
                </div>
            </div>
        </div>

    )
}

export default Providers;