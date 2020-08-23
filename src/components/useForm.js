import {useState, useEffect} from 'react';

const initValues = {
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

 const useForm = (callback, validateSignUp) => {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({})
      //set errors
      //handling errors
      // callback function errors to form
    const [isSent, setIsSent] = useState(false);  
    const [isSubmitting, setIsSubmitting] = useState(false);     

    
      const handleChange = (e)=>{
        const {name, value} = e.target;
        setIsSubmitting(false);
        const newValues = {...values, [name]: value};       
        isSent && setErrors(validateSignUp(newValues));
        setValues(values =>(newValues));
      };     
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validateSignUp(values));        
        setIsSubmitting(true);
        setIsSent(true);          
       }

      useEffect(()=>{
          if(Object.keys(errors).length === 0 && isSubmitting && isSent){
              callback(
                setValues(initValues)
              );
          }
      }, [errors])
    
   return{
    values,
    handleChange,
    handleSubmit,
    errors
} 
}

export default useForm;