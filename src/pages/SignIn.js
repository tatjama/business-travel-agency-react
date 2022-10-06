import React from 'react';
import { useHistory } from 'react-router-dom';
//components
import login from "../components/utils/login";
import validateSignIn from '../components/validateSignIn';
//context
import { useAppContext } from '../libs/contextLib';
//hooks
import useForm from '../hooks/useForm';

const initValuesForSignIn = {
  email: '',
  password: '',
  status: 0
};

const SignIn = () => {
  const history = useHistory();
  const { setUserHasAuthenticated} = useAppContext();
  const { values, handleChange, handleSubmit, handleReset, errors } = useForm(submitted, validateSignIn, initValuesForSignIn, login);
  
 async  function submitted() {  
    try{
     const user = login(values);
     if(Object.keys(user).length !==0){
      alert('Submitted successfully');      
      sessionStorage.setItem('logInUser', JSON.stringify(user)) ;
      setUserHasAuthenticated({
              isAuthenticated:true,
              logInUser: user,
              rk:process.env.REACT_APP_RAPID_API_KEY,
              rkcc: process.env.REACT_APP_RAPID_API_KEY_COUNTRIES_CITIES
            });        
      history.push("/");
     }else{
       alert('invalid user')
     }     
      }catch{
        alert("User name or password is not valid")
      }
    }     
    
    return(
    <div className = "intro-page">        
      <div className="intro-page-gradient">           
        <form className="sign-form" id="sign-in-form" onSubmit = {handleSubmit}  noValidate >
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