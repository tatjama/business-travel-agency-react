import React from 'react';
import useForm from './useForm';


export default function SignUp(){
  const { values, handleChange, handleSubmit } = useForm(signUp);
  
    //onClick
  
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
        <form className="sign-form" id="sign-up-form" onSubmit = {handleSubmit} noValidate /*style={{display: "none"}}*/ >
                   <fieldset className="sign-up-fieldset">                
                        <div id="formMain">
                           <div id="formLeft" >
                                
                                <span className="error-sign-up" title="Error. Valid name contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="firstName" 
                                  placeholder=" First name - (required)" 
                                  id="sign-up-name" 
                                  onBlur={validName('sign-up-name', 0, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 0)} 
                                  value = {values.firstName}
                                  onChange = {handleChange}
                                  required
                                />
                                <br/>
                                <span className="error-sign-up" title="Error. Valid surname contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="lastName" 
                                  placeholder=" Last name - (required)" 
                                  id="sign-up-surname" 
                                  onBlur={validName('sign-up-surname', 1, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 1)} 
                                  value={values.lastName}
                                  onChange = {handleChange}
                                  required
                                />
                                <br/> 
                                <span className="error-sign-up" title="Error. E-mail format something@something.com"></span>
                                <input 
                                  type="email" 
                                  name="email" 
                                  placeholder=" E-mail - (required)" 
                                  id="sign-up-e-mail" 
                                  onBlur={validEMail('sign-up-e-mail', 2, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 2)}
                                  value = {values.email} 
                                  onChange = {handleChange}
                                  required
                                />
                                <br/> 
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="password" 
                                  placeholder=" Password - (required)" 
                                  id="sign-up-password" 
                                  onBlur={validPassword('sign-up-password', 3, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 3)}
                                  value = {values.password} 
                                  onChange = {handleChange}
                                  required
                                />
                                
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="passwordRepeat" 
                                  placeholder=" Repeat password - (required)" 
                                  id="sign-up-password-r" 
                                  onBlur={validPassword('sign-up-password-r', 4, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 4)}
                                  value = {values.passwordRepeat} 
                                  onChange = {handleChange}
                                  required
                                />
                            </div>

                            <div id="formRight" >
                                
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="address" 
                                  placeholder=" Address 1 - (required)" 
                                  id="address1" 
                                  onBlur={validPassword('address1', 5, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 5)}
                                  value = {values.address} 
                                  onChange = {handleChange}
                                  required
                                />
                                <br/> 
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="addressAlternative" 
                                  placeholder=" Address 2" 
                                  id="address2" 
                                  onBlur={validPassword('address2', 6, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 6)}
                                  value = {values.addressAlternative}
                                  onChange = {handleChange}
                                />
                                <br/> 
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phone" 
                                  minLength="11" 
                                  maxLength="15" 
                                  placeholder=" Phone 1 - (required)" 
                                  id="phone1" 
                                  onBlur={validPhone('phone1', 7, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 7)} 
                                  value = {values.phone}
                                  onChange = {handleChange}
                                  required
                                />
                                <br/>
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phoneAlternative" 
                                  minLength="11" 
                                  maxLength="15" 
                                  placeholder=" Phone 2" 
                                  id="phone2" 
                                  onBlur={validPhone('phone2', 8, 'error-sign-up')} 
                                  onFocus={clearonFocus('error-sign-up', 8)}
                                  value = {values.phoneAlternative}
                                  onChange = {handleChange}
                                />
                                <br/>
                                <div style={{display:"none"}}> Status:
                                <input type="number" name="status" placeholder="administrator" id="status" readOnly value="1"/>
                                <br/>
                            </div>
                         </div>
                        </div>
                        <div className="buttons">
                            <button type="submit">Sign Up</button>
                            <button type="reset" >Clear</button>
                            <br/><br/>
                            <input type="button" onClick={hideSignUpForm} value="Close"/>
                        </div>
                   </fieldset>
                </form>

    )
}
