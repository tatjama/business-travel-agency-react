import React from 'react';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Nav from './pages/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Life from './pages/Life';
import Accommodation from './pages/Accommodation';
import Enjoy from './pages/Enjoy';
import Feedback from './pages/Feedbacks';
import Providers from './pages/Providers';




const App = ()=>{
 // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
 //const history = useHistory();
  
    return(
        <div >        
            <Router>
             <Nav/>
             <Switch>                 
             <Route path = "/" exact  component = {Home}/>
               <Route path = "/signIn"  component = {SignIn}/>  
               <Route path = "/signup" component = {SignUp} />             
               <Route path = "/life" component = {Life} />
               <Route path = "/accommodation" component = {Accommodation}/>
               <Route path = "/enjoy" component = {Enjoy}/>
               <Route path = "/feedbacks" component = {Feedback} />
               <Route path = "/providers" component = {Providers} />
             </Switch>
            </Router>           
        <Footer/>
        </div>
    )
}


export default App;