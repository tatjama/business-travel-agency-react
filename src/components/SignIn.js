import React, {useState} from 'react';

export default function SignIn() {

    const [values, setValues] = useState({
        eMail: '',
        password: ''
    });
    const handleEMailInputChange = (e)=>{
        e.persist();
        setValues((values)=>({
            ...values,
            eMail: e.target.value,
        }));
    };
    const handlePasswordInputChange = (e)=>{
        e.persist();
        setValues((values)=>({
            ...values,
            password: e.target.value,
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [ valid, setValid] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
       if(values.eMail && values.password){
            setValid(true);
        }
        setSubmitted(true);
        alert('Submit');
    }

    
 //onClick
    function signIn() {
        alert('Clicked signIn');
      }
 //onFocus
   function clearonFocus(){
    console.log('Focus function');
  }
  //onBlur
  
  function validEMail() {
    console.log('Blur email');
  }
  function validPassword() {
    console.log('Blur password');
  }
    return(
    <div>
        
        <form className="sign-form" id="sign-in-form" onSubmit = {handleSubmit} noValidate>
        {submitted && valid ? <div className="success-message">Thank you for Sign In</div>: null}
          <fieldset>
            <legend>Sign in</legend>
              
            { submitted && !values.eMail ? <span className="error-message" id="email-error" >* Please, fill email</span> : null }
              <br/>
            <span className="error-sign-in"  title="Error. E-mail format something@something.com"></span>
            <input 
                type="email"  
                id="sign-in-e-mail" 
                onBlur={validEMail('sign-in-e-mail', 0, 'error-sign-in')} 
                onFocus={clearonFocus('error-sign-in', 0)} 
                required = {true}
                value = {values.eMail}
                onChange = {handleEMailInputChange}
                placeholder = " E-MAIL "
            /><br/>
             
            
        
            {submitted && !values.password ? <span className = "error-message">* Please, fill password</span> : null }
            <br/>
            <span className="error-sign-in"  title="Error. Password format only recive letters and numbers"></span>
            <input 
                type="password" 
                id="sign-in-password"  
                onBlur={validPassword('sign-in-password', 1, 'error-sign-in')} 
                onFocus={clearonFocus('error-sign-in', 1)} 
                required = {true}
                value = {values.password}
                onChange = {handlePasswordInputChange}
                placeholder = " PASSWORD "
            />
            <br/>
            <br/>            
            <button type="submit" onClick={signIn}>Sign in </button>
            <button type="reset" >Clear</button>
        </fieldset>
      </form>
      
      
    </div>
    )
}