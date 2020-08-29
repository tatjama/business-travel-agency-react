import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Life from './Life';
import Accommodation from './Accommodation'
import Enjoy from './Enjoy';
import Feedbacks from './Feedbacks'; 
import Providers from './Providers';
//import NotFound from './NotFound';

export default function Routes(props) {
console.log(props);
  return (
        <Switch>  
            <Route path = "/signIn"  component = {SignIn}/>  
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/" exact  component = {Home}/>         
                    <Route path = "/life" component = {Life} />
                    <Route path = "/accommodation" component = {Accommodation}/>
                    <Route path = "/enjoy" component = {Enjoy}/>
                    <Route path = "/feedbacks" component = {Feedbacks} />
                    <Route path = "/providers" component = {Providers} />
            {/*
                props.isUserAuthenticated?
                <>
                    <Route path = "/" exact  component = {Home}/>         
                    <Route path = "/life" component = {Life} />
                    <Route path = "/accommodation" component = {Accommodation}/>
                    <Route path = "/enjoy" component = {Enjoy}/>
                    <Route path = "/feedbacks" component = {Feedbacks} />
                    <Route path = "/providers" component = {Providers} />
                </>
                 : <Redirect to="/signin"/>
            */}                       
                
                       <Route  component = {SignIn} />   
        </Switch>
    );
}