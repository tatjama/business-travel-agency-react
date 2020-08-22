import {useState} from 'react';
import validateSignUp from './validateSignUp';

export default function useForm (callback, validateSignUp) {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        address: "",
        addressAlternative: "",
        phone: "",
        phoneAlternative: ""
      })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        address: "",
        addressAlternative: "",
        phone: "",
        phoneAlternative: ""
      })
      //set errors
      //handling errors
      // callback function errors to form
    
      const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setValues({
          ...values,
          [name]: value
        })    
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validateSignUp(values));
        //signUp();
        callback();
      }
    
   return{
    values,
    handleChange,
    handleSubmit,
    errors
} 
}

