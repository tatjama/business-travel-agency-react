import React, {useState} from 'react';
import useForm from './useForm';
import validateSignIn from './validateSignIn';

const initValuesForSignIn = {
  email: '',
  password: ''
};

const SignIn = () => {
  const { values, handleChange, handleSubmit, handleReset, errors } = useForm(submitted, validateSignIn, initValuesForSignIn);
  const [isSuccess, setIsSuccess] = useState(false)

  function submitted() {
    alert('Submitted successfully');
    setIsSuccess(true);
    console.log(values);
    document.getElementById('sign-in-form').style.display = "none";
    document.getElementById('go-sign-up-form').style.display = "none";
    document.getElementById('start').style.display = "block";
  } 
    
    return(
    <div>        
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
    )
}

export default  SignIn;