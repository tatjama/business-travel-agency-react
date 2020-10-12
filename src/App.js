import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import { Link, useHistory} from  'react-router-dom';
import {AppContext} from './libs/contextLib';
import Routes from './pages/Routes';
import useStateWithSessionStorage from './hooks/useStateWithSessionStorage';

const App = ()=>{
    const history = useHistory();
    const [isUserAuthenticated, setUserHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating ] = useState(true);
    const [value] = useStateWithSessionStorage('logInUser')

   function handleSignOut() {    
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
        await 
        console.log('Is user in session?');
        if(value === ""){
            history.replace('/signin');
        }else{
            let user = JSON.parse(value);
            alert("user " + user.email + " is on session!")
            history.replace('/');
            
      //rk = "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"     -t.g.c
      //rk = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"       -t.m.p.b.c
            await setUserHasAuthenticated({
                isAuthenticated:true,
                logInUser: user,
                rk:"84a65184famshb001956fd650790p1710e5jsnf0ddc18f6e0e",// - dm
                rkcc: "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
              })
        }
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
                    {/*<Link to="/accommodation"> <li>Accommodation</li></Link>*/}
                    <Link to="/enjoy"><li >Enjoy</li></Link>
                    {
                        (isUserAuthenticated.logInUser.status == 0)
                        && <Link to="/feedbacks"><li >Feedbacks</li> </Link>
}                    {
                        (isUserAuthenticated.logInUser.status == 1) 
                        && <Link to="/providers"><li id="providers" to="/providers">Providers</li></Link>
                    }
                    
                    {/*<li className="icon" onClick={openNavHamburger}>
                        <i className="fa fa-bars"></i>
                    </li>*/}
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