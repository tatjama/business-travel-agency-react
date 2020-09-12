import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import { Link, useHistory} from  'react-router-dom';
import {AppContext} from './libs/contextLib';
import Routes from './pages/Routes';
import useStateWithSessionStorage from './components/utils/useStateWithSessionStorage';

const App = ()=>{
    const history = useHistory();
    const [isUserAuthenticated, setUserHasAuthenticated] = useState(false);
   const [isAuthenticating, setIsAuthenticating ] = useState(true);
   const [value, setValue] = useStateWithSessionStorage('logInUser')

   function handleSignOut() {
    //await Auth.SignOut() - to complete signOut from session    
    sessionStorage.clear();
    history.replace("/signin");
    setUserHasAuthenticated(false);
    alert('Sign Out');
}

useEffect(() => {
    onLoad();    
}, [])

async function onLoad() {
    try {
        alert('ima li usera');
        console.log(value);
        if(value === ""){
            alert('nista usera')
        }else{
            console.log(value);
            history.replace('/');
            await setUserHasAuthenticated(true)
        }
        //await Auth.currentSession(); 
        //load current session - if it load, updates the 
        //isAuthenticating state variable once the process is complete. 
        //It does so by calling setIsAuthenticating(false).
        //await setIsAuthenticating(false)
       
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
       // !isAuthenticating &&
        <div className = "App-container" >            
            <div className="top-nav" id="my-top-nav">
                <ul>   
                    {console.log(isUserAuthenticated)}             
                    {  
                    isUserAuthenticated
                        ? <>
                        <li onClick = {handleSignOut}>Sign Out</li>
                        <Link to="/"><li className="active">Home</li></Link>
                    <Link to="/life"><li>Life ...</li></Link>
                    <Link to="/accommodation"> <li>Accommodation</li></Link>
                    <Link to="/enjoy"><li >Enjoy ...</li></Link>
                    <Link to="/feedbacks"><li >Feedbacks</li> </Link>
                    <Link to="/providers"><li id="providers" to="/providers">Providers</li></Link>
                
                    <li className="icon" onClick={openNavHamburger}>
                        <i className="fa fa-bars"></i>
                    </li>
                        </>
                        : <>
                        <Link to="/signin"><li>Sign in</li></Link>
                        <Link to="/signup"><li>Sign Up</li></Link>
                        
                        </>
                    }
                                    
                </ul>
            </div>
            <AppContext.Provider value = {{ isUserAuthenticated, setUserHasAuthenticated}} >  
              <Routes/> 
              </AppContext.Provider>       
        <Footer/>
        </div>
    )
}


export default App;