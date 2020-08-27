import React from 'react';
import About from './About';
import Shop from './Shop';
import Navigation from './Navigation';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function AppProba() {
    
    return(
        <div>
            <Router>
                <Navigation/>
                <Route path = "/about" component = {About} />
                <Route path = "/shop" component = {Shop} />
            </Router>
        </div>
    )
}

export default AppProba;