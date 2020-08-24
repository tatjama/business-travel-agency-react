import React from 'react';

export default function IntroHeader() {
    //onClick
    function showSignUpForm(){
        document.getElementById('go-sign-in-form').style.display = "block";
        document.getElementById('go-sign-up-form').style.display = "none";
        document.getElementById('sign-in-form').style.display = "none";
        document.getElementById('sign-up-form').style.display = "block";
      }
      function showSignInForm(){
        document.getElementById('go-sign-in-form').style.display = "none";
        document.getElementById('go-sign-up-form').style.display = "block";
        document.getElementById('sign-in-form').style.display = "block";
        document.getElementById('sign-up-form').style.display = "none";
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