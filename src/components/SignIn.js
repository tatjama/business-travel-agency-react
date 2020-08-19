import React from 'react';

export default function SignIn() {
        //onClivk
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
        <form className="sign-form" id="sign-in-form">
        <fieldset>
            <legend>Sign in</legend>
            <br/>E-mail:<br/>
            <span className="error-sign-in"  title="Error. E-mail format something@something.com"></span>
            <input type="email"  id="sign-in-e-mail" onBlur={validEMail('sign-in-e-mail', 0, 'error-sign-in')} onFocus={clearonFocus('error-sign-in', 0)} required/>
            <br/> Password:<br/>
            <span className="error-sign-in"  title="Error. Password format only letters and numbers"></span>
            <input type="password" id="sign-in-password"  onBlur={validPassword('sign-in-password', 1, 'error-sign-in')} onFocus={clearonFocus('error-sign-in', 1)} required/>
            <br/>
            <br/>
            <button type="button" onClick={signIn}>Sign in </button>
            <button type="reset" >Clear</button>
        </fieldset>
    </form>

    )
}