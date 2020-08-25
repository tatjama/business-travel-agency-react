import React from 'react';
//import '../main.css';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SelectForm from '../components/SelectForm';

const Start = ()=>{
    return(
        <div>
            <Navigation/>
            <header className="header" id="header-home">
                <div id="message">Welcome to App</div>
                <SelectForm/>
            </header>
        <Footer/>
        </div>
    )
}

export default Start;