import React, {useState} from 'react';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import ProviderInfo from '../components/ProviderInfo';
import providersInfo from '../components/data/providersInfo';


const Providers = ()=>{
    const [newProvider, setNewProvider] = useState(false)
    const providersInfoArray = providersInfo
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
                                <ProviderDetailForm/>
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