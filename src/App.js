import React from 'react';

 function App(props){
   //onClick
   function showSignUpForm(){
     alert('Clicked showSignUpForm');
   }
   function showSignInForm(){
     alert('Clicked showSignInForm');
   }
   function signIn() {
     alert('Clicked signIn');
   }
   function signUp() {
     alert('Clicked signUp');
   }
   function hideSignUpForm(){
     console.log('Click Sign Up Form');
   }
   //onFocus
   function clearonFocus(){
     console.log('Focus function');
   }
   //onBlur
   function validName() {
     console.log('Blur name');
   }
   function validEMail() {
     console.log('Blur email');
   }
   function validPassword() {
     console.log('Blur password');
   }
   function validPhone() {
     console.log('Blur phone');
   }
   
  return(
    <div>
        <header className="container">

      {/*<!--NAVIGATION-->*/}
          <div className="topnav">
            <a id="start" className="active" href="./view/start.html" style={{display: "none"}}>Start</a>           
            <a id="go-sign-up-form" href="#sign-up-form" onClick={showSignUpForm}>Sign Up</a>
            <a id="go-sign-in-form" href="#sign-in-form" onClick={showSignInForm} style={{display:"none"}}>Sign In</a>            
          </div>
        </header>

      {/*<!--SIGN IN-->*/}
        <div>
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
          </div>

          {/*<!--SIGN UP POP-UP FORM-->*/}

          <div >
                <form className="sign-form" id="sign-up-form" style={{display: "none"}}>
                   <fieldset className="sign-up-fieldset">                
                        <div id="formMain">
                           <div id="formLeft" >
                                First name:
                                <span className="error-sign-up" title="Error. Valid name contain only letters"></span>
                                <input type="text"  id="sign-up-name" onBlur={validName('sign-up-name', 0, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 0)} required/>
                                <br/> Second name:
                                <span className="error-sign-up" title="Error. Valid surname contain only letters"></span>
                                <input type="text"  id="sign-up-surname" onBlur={validName('sign-up-surname', 1, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 1)} required/>
                                <br/> E-mail:
                                <span className="error-sign-up" title="Error. E-mail format something@something.com"></span>
                                <input type="email"  id="sign-up-e-mail" onBlur={validEMail('sign-up-e-mail', 2, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 2)} required/>
                                <br/> Password:
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input type="password"  id="sign-up-password" name="bday" onBlur={validPassword('sign-up-password', 3, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 3)} required/>
                                <br/> Repeat Password:
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input type="password"  id="sign-up-password-r" name="bday" onBlur={validPassword('sign-up-password-r', 4, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 4)} required/>
                            </div>

                            <div id="formRight" >
                                Adress 1:
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input type="text" placeholder="(required)" id="address1" onBlur={validPassword('address1', 5, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 5)} required/>
                                <br/> Adress 2:
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input type="text" id="address2" onBlur={validPassword('address2', 6, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 6)}/>
                                <br/> Phone number 1:
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input type="number" minLength="11" maxLength="15" placeholder="(required)" id="phone1" onBlur={validPhone('phone1', 7, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 7)} required/>
                                <br/> Phone number 2:
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input type="number" minLength="11" maxLength="15"  id="phone2" onBlur={validPhone('phone2', 8, 'error-sign-up')} onFocus={clearonFocus('error-sign-up', 8)}/>
                                <br/>
                                <div style={{display:"none"}}> Status:
                                <input type="number" placeholder="administrator" id="status" readOnly value="1"/>
                                <br/>
                            </div>
                         </div>
                        </div>
                        <div className="buttons">
                            <button type="button" onClick={signUp}>Sign Up</button>
                            <button type="reset" >Clear</button>
                            <br/><br/>
                            <input type="button" onClick={hideSignUpForm} value="Close"/>
                        </div>
                   </fieldset>
                </form>
            </div>
            <footer>
              <p>Beograd, Milutina Milankovica 1, 011-111-1111</p>
              <div>Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
    </div>
  )
   
}

export default App