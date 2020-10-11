import React, {useState} from 'react';
import useForm from '../hooks/useForm';
import validateProviderDetailForm from './utils/validateProviderDetailForm';

const initValuesForProvider = {
    type: "",
    name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    aboutProvider: "",
}

const ProviderDetailForm = () =>{

    const { values, handleChange, handleSubmit, handleReset, errors } 
  = useForm(submitted, validateProviderDetailForm, initValuesForProvider);

  const [isSuccess, setIsSuccess] = useState(false);    
  
  function submitted() {
    alert('Submitted successfully');
    setIsSuccess(true);
    console.log(isSuccess)
    console.log(values);
  }

    return(        
        <form className="show-provider-edit " id="showEditProvider" onSubmit = {handleSubmit} noValidate> 
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>
         <div className="provider-detail-form " id="providerDetail">
            <div className="left ">
                <p>Type:</p>
                             <br/>
                <input list="typeProvider" name="typeProvider"/>
                <datalist id="typeProvider">       
                <option value="Airplane"/>
                                            <option 
                                                name = "type"
                                                value="Bus"
                                                onChange = {handleChange}
                                            />
                                            <option 
                                                value="Company car"
                                                name = "type"
                                                onChange = {handleChange}
                                            />
                                            <option 
                                                name = "type"
                                                value="Rent a car"
                                                onChange = {handleChange}
                                            />
                                            <option 
                                                name = "type"
                                                value="Train"
                                                onChange = {handleChange}
                                            />
                                            <option 
                                                name = "type"
                                                value="Taxi"
                                                onChange = {handleChange}
                                            />  
                </datalist>
                               
                <p>Provider name:</p>
                <input 
                    type="text"
                    name = "name"
                    className = {`${errors.name && "inputError"}`}
                    placeholder = "Provider name - (required)"
                    id = "provider-form-name"
                    value = {values.name}
                    onChange = {handleChange}
                    required = {true}
                />
                {errors.name && <p className = "error-message-comment">{errors.name}</p>}
                
                <p>Country:</p><input type="text"/>
                <p>City:</p><input type="text"/>
                <p>Address:</p>
                <input 
                    type="text"
                    name = "address"
                    className = {`${errors.address && "inputError"}`}
                    placeholder = "Provider address - (required)"
                    id = "provider-form-address"
                    value = {values.address}
                    onChange = {handleChange}
                    required = {true}
                />
                {errors.address && <p className = "error-message-comment">{errors.address}</p>}
                <p>Phone:</p>
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
                                  required = {true}
                                />
                                 { errors.phone && <p className="error-message-comment">{errors.phone}</p>}
                                
            </div>
            <div className="right ">
                <h3>About company</h3>
                <textarea  
                    rows="20" 
                    cols = "50"
                    name = "text" 
                    placeholder="Place for your comment..."
                    onChange = {handleChange}
                    value = {values.text}
                    className = {`${errors.text && 'inputError'}`}
                    required = {true}                >
                </textarea>
                {errors.text && <p className = "error-message-comment">{errors.text}</p>}                
            </div>
            <div>
                <button type="submit">Submit</button>                
                <button type="reset" onClick = {handleReset} >Clear</button>
            </div>
        </div>
    
        </form>
    )
}

export default ProviderDetailForm;