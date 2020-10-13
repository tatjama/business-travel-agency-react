import React, {useState, useEffect} from 'react';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import ProviderInfo from '../components/ProviderInfo';
import providersInfo from '../components/data/providersInfo';

const initValuesForProvider = {
    id: "",
    location_id: "",
    type: "",
    category: {name: ""},
    name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    text: "",
    photo: {images: {small: {url: ""}}}
}

const Providers = ()=>{
    const [newProvider, setNewProvider] = useState(false)
    const [providersInfoArray, setProvidersInfoArray] = useState(providersInfo)
    let newProvidersInfoArrayFromLocalStorage = []
    const providersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray')) || []
    useEffect(() => {       
    if(providersInfoArrayFromLocalStorage.length === 0){
        localStorage.setItem('providersArray', JSON.stringify(providersInfoArray))
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray'))
    } else{
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray'))
    }
    setProvidersInfoArray(newProvidersInfoArrayFromLocalStorage)
    console.log(providersInfoArray)
    }, [])

    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)

    function showNewProviderForm() {
        (newProvider === false)? setNewProvider(true): setNewProvider(false)
    }   
     
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
                                <ProviderDetailForm
                                    initValues = {initValuesForProvider}
                                />
                            </div>
                    </div>
                }
                    <h1>Provider list:</h1>
                    {providersInfoArray.map((provider) => {
                        return(
                            <ProviderInfo
                                info = {provider}
                                key = {provider.id}
                                id = {provider.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Providers;