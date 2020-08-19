import React from 'react';

export default function IntroHeader() {
    //onClick
    function showSignUpForm(){
        alert('Clicked showSignUpForm');
      }
      function showSignInForm(){
        alert('Clicked showSignInForm');
      }
   

    return(
        <header className="container">

      {/*<!--NAVIGATION-->*/}
          <div className="topnav">
            <a id="start" className="active" href="./view/start.html" style={{display: "none"}}>Start</a>           
            <a id="go-sign-up-form" href="#sign-up-form" onClick={showSignUpForm}>Sign Up</a>
            <a id="go-sign-in-form" href="#sign-in-form" onClick={showSignInForm} style={{display:"none"}}>Sign In</a>            
          </div>
        </header>

    )
}