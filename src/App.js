import React from 'react';
import Footer from './components/Footer';
//import SelectForm from './components/SelectForm';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Nav from './pages/Nav';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Life from './pages/Life';
import Accommodation from './pages/Accommodation';
import Enjoy from './pages/Enjoy';
import Feedback from './pages/Feedbacks';
import Providers from './pages/Providers';



const App = ()=>{
    return(
        <div >
          <div id="intro-page">
          <Intro/>
          </div>
          
          <div id = "start-page" >
            <Router>
             <Nav/>
             <Switch>
             <Route path = "/" exact component = {Home}/>
               <Route path = "/intro" component = {Intro}/>               
               <Route path = "/life" component = {Life} />
               <Route path = "/accommodation" component = {Accommodation}/>
               <Route path = "/enjoy" component = {Enjoy}/>
               <Route path = "/feedbacks" component = {Feedback} />
               <Route path = "/providers" component = {Providers} />
             </Switch>
            </Router>
            
            </div>
            <div id="home-page">
              <Home/>
            </div>

            
        <Footer/>
        </div>
    )
}


export default App;