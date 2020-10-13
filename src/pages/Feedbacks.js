import React, {useState, useEffect} from 'react';
import {useAppContext} from '../libs/contextLib';
import ProviderInfo from '../components/ProviderInfo';
import providersInfo from '../components/data/providersInfo';

const Feedbacks = ()=>{    
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
    console.log( isUserAuthenticated);

    return(
        <div className="page-feedback">
            <header className="header" id="header-feedback">
                <div id="message" style={{"color": "rgb(29, 150, 187)"}}>
                    Add comment {isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}
                </div>
            </header>            
                <h3>Feedback about Providers</h3>           

            <div className="wrapper">                
                <div id="showTransportation">

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

export default Feedbacks;