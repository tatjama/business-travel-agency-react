import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import useForm from '../components/useForm';
import validateSignIn from '../components/validateSignIn';
import {useAppContext} from '../libs/contextLib';
//import users from '../components/data/users.json';

import login from "../components/utils/login";
import useStateWithSessionStorage from '../components/utils/useStateWithSessionStorage';

const initValuesForSignIn = {
  email: '',
  password: '',
  status: 0
};

const SignIn = () => {
  const history = useHistory();
  const { values, handleChange, handleSubmit, handleReset, errors, user } = useForm(submitted, validateSignIn, initValuesForSignIn, login);
  const [isSuccess, setIsSuccess] = useState(false)
  const { setUserHasAuthenticated} = useAppContext();
  //const [user, setUser] = useState({})
 // const [value, setValue] = useStateWithSessionStorage('logInUser');
  
  function submitted() {    
    setIsSuccess(true);
    console.log(values);
    console.log(user);
    const stringUser = JSON.stringify(user);
    console.log(stringUser) 
    //setValue(stringUser);
    sessionStorage.setItem('logInUser', stringUser)
   // setUserInCurrentSession('logInUser', stringUser);
    
    alert('Submitted successfully');
    setUserHasAuthenticated(true);
    history.push('/');
   /*if(values.email === "user@user.com" && values.password === "UserUser1"){
        alert('Submitted successfully');
        setUserHasAuthenticated(true);
        history.push('/');
      }else{
        alert( 'Invalid credentials!');
      }*/
    }
    
  
    
    return(
    <div className = "intro-page">        
      <div className="intro-page-gradient">                          
           
        <form className="sign-form" id="sign-in-form" onSubmit = {handleSubmit}  noValidate >
        {isSuccess && <div className="success-message">Thank you for Sign In</div>}
          <fieldset>
            <legend>Sign in</legend>
            <br/>
            <span className="error-sign-in"  title="Error. E-mail format something@something.com"></span>
            <input 
                type="email"                 
                name = "email"
                className={`${errors.email && "inputError"}`}
                placeholder = " E-mail "
                id="sign-in-e-mail" 
                value = {values.email}
                onChange = {handleChange}
                autoFocus
                required = {true}                
            />
            <br/>
             {errors.email && <p className="error-message">{errors.email}</p>}
            <span className="error-sign-in"  title="Error. Password format only recive letters and numbers"></span>
            <input 
                type="password"                 
                name="password"
                className={`${errors.password && "inputError"}` }
                placeholder = " Password "
                id="sign-in-password"
                value = {values.password}
                onChange = {handleChange} 
                required = {true}                
            />
            {errors.password && <p className = "error-message">{errors.password}</p>}
            <br/>
            <br/>            
            <button type="submit" >Sign in </button>
            <button type="reset" onClick = {handleReset}>Clear</button>
        </fieldset>
      </form>      
    </div>
    </div>
    )
}

export default  SignIn;