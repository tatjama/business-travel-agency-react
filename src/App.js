import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from  'react-router-dom';
//import Nav from './pages/Nav';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Life from './pages/Life';
import Accommodation from './pages/Accommodation';
import Enjoy from './pages/Enjoy';
import Feedback from './pages/Feedbacks';
import Providers from './pages/Providers';
import NotFound from './pages/NotFound';
import {AppContext} from './libs/contextLib';




const App = ()=>{
    const history = useHistory();
    const [isAuthenticating, setIsAuthenticating ] = useState(true);
    const [isUserAuthenticated, setUserHasAuthenticated] = useState(false);
    
 
    function handleSignOut() {
        //await Auth.SignOut() - to complete signOut from session
        setUserHasAuthenticated(false);
        //history.push("./life");
        
        //setIsAuthenticating(true);
        alert('Sign Out');
    }

    useEffect(() => {
        onLoad();
        
    }, [])

    function onLoad() {
        try {
            //await Auth.currentSession(); 
            //load current session - if it load, updates the 
            //isAuthenticating state variable once the process is complete. 
            //It does so by calling setIsAuthenticating(false).
            setUserHasAuthenticated(true)
        } catch (error) {
            if(error !== 'No current user'){
                alert(error)
            }
        }
        setIsAuthenticating(false);
    }

    function openNavHamburger() {
        const myTopNav = document.getElementById("my-top-nav");
        if(myTopNav.className === "top-nav"){
            myTopNav.className += " responsive";
        } else {
            myTopNav.className = "top-nav";
        }
    }

  
    return(
        !isAuthenticating &&
        <div >        
            <Router>
            <div className="top-nav" id="my-top-nav">
            <ul>
                
                { isUserAuthenticated?
                    <li onClick = {handleSignOut}>Sign Out</li>
                    : <>
                    <Link to="/signin"><li>Sign in</li></Link>
                    <Link to="/signup"><li>Sign Up</li></Link>
                    </>
                }
                <Link to="/"><li className="active">Home</li></Link>
                <Link to="/life"><li>Life ...</li></Link>
                <Link to="/accommodation"> <li>Accommodation</li></Link>
                <Link to="/enjoy"><li >Enjoy ...</li></Link>
                <Link to="/feedbacks"><li >Feedbacks</li> </Link>
                <Link to="/providers"><li id="providers" to="/providers">Providers</li></Link>
                
                <li className="icon" onClick={openNavHamburger}>
                    <i className="fa fa-bars"></i>
                </li>
                
            </ul>
    </div>

             <Switch>   
                 <AppContext.Provider value = {{ isUserAuthenticated, setUserHasAuthenticated}} >                     
                    <Route path = "/signIn"  component = {SignIn}/>  
                    <Route path = "/signup" component = {SignUp} />    
                    <Route path = "/" exact  component = {Home}/>         
                    <Route path = "/life" component = {Life} />
                    <Route path = "/accommodation" component = {Accommodation}/>
                    <Route path = "/enjoy" component = {Enjoy}/>
                    <Route path = "/feedbacks" component = {Feedback} />
                    <Route path = "/providers" component = {Providers} />
                    <Route  component = {NotFound} />
                </AppContext.Provider>
             </Switch>
            </Router>           
        <Footer/>
        </div>
    )
}


export default App;