import React, {useState} from 'react';
import useForm from './useForm';
import validateSignUp from './validateSignUp';

const initValuesForSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
  address: "",
  addressAlternative: "",
  phone: "",
  phoneAlternative: ""
};

const SignUp = ()=>{
  const { values, handleChange, handleSubmit, handleReset, errors } = useForm(submitted, validateSignUp, initValuesForSignUp);
  const [isSuccess, setIsSuccess] = useState(false);
  
  function submitted() {
    alert('Submitted successfully');
    setIsSuccess(true);
    console.log(values);
  }
  function hideSignUpForm(){
    console.log('Click Sign Up Form');
  }
    return(
        <form className="sign-form" id="sign-up-form" onSubmit = {handleSubmit} noValidate style={{display: "none"}} >
          {isSuccess && <div className="success-message">Thank you for register</div>}
                   <fieldset className="sign-up-fieldset">     
                   <legend>SIGN UP</legend>           
                        <div id="formMain">
                           <div id="formLeft" >
                                
                                <span className="error-sign-up" title="Error. Valid name contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="firstName" 
                                  className = {`${errors.firstName && "inputError"}`}
                                  placeholder=" First name - (required)" 
                                  id="sign-up-name"   
                                  value = {values.firstName}
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                                <span className="error-sign-up" title="Error. Valid surname contain only letters"></span>
                                <input 
                                  type="text" 
                                  name="lastName" 
                                  className = {`${errors.lastName && "inputError"}`}
                                  placeholder=" Last name - (required)" 
                                  id="sign-up-surname"  
                                  value={values.lastName}
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                <span className="error-sign-up" title="Error. E-mail format something@something.com"></span>
                                <input 
                                  type="email" 
                                  name="email" 
                                  className = {`${errors.email && "inputError"}`}
                                  placeholder=" E-mail - (required)" 
                                  id="sign-up-e-mail" 
                                  value = {values.email} 
                                  onChange = {handleChange}
                                  required
                                />
                                
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="password" 
                                  className = {`${errors.password && "inputError"}`}
                                  placeholder=" Password - (required)" 
                                  id="sign-up-password" 
                                  value = {values.password} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                <span className="error-sign-up" title="Error. Password format only letters and numbers"></span>
                                <input 
                                  type="password" 
                                  name="passwordRepeat" 
                                  className = {`${errors.passwordRepeat && "inputError"}`}
                                  placeholder=" Repeat password - (required)" 
                                  id="sign-up-password-r" 
                                  value = {values.passwordRepeat} 
                                  onChange = {handleChange}
                                  required
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                {errors.passwordRepeat && <p className="error-message">{errors.passwordRepeat}</p>}
                            </div>

                            <div id="formRight" >
                                
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="address" 
                                  className = {`${errors.address && "inputError"}`}
                                  placeholder=" Address 1 - (required)" 
                                  id="address1"   
                                  value = {values.address} 
                                  onChange = {handleChange}
                                  required
                                />
                              {errors.address && <p className="error-message">{errors.address}</p>}
                                <span className="error-sign-up" title="Error. Address contain only letters and numbers"></span>
                                <input 
                                  type="text" 
                                  name="addressAlternative" 
                                  className = {`${errors.addressAlternative && "inputError"}`}
                                  placeholder=" Address 2" 
                                  id="address2"  
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
                                  className = {`${errors.phone && "inputError"}`}
                                  placeholder=" Phone 1 - (required)" 
                                  id="phone1"   
                                  value = {values.phone}
                                  onChange = {handleChange}
                                  required
                                />
                                 { errors.phone && <p className="error-message">{errors.phone}</p>}
                                <span className="error-sign-up" title="Error. Phone contain only numbers"></span>
                                <input 
                                  type="number" 
                                  name="phoneAlternative" 
                                  minLength="11" 
                                  maxLength="15" 
                                  className = {`${errors.phoneAlternative && "inputError"}`}
                                  placeholder=" Phone 2" 
                                  id="phone2"   
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
                            <button type="reset" onClick = {handleReset} >Clear</button>
                            <br/><br/>
                            <input type="button" onClick={hideSignUpForm} value="Close"/>
                        </div>
                   </fieldset>
                </form>

    )
}
export default SignUp;