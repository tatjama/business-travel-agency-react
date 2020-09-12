import {useState, useEffect} from 'react';
import  login  from '../components/utils/login';
//import { Auth } from './utils/Auth';
//import users from './data/users.json';

 const useForm = (callback, validate, initValues) => {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});
    
    const [isSent, setIsSent] = useState(false);  
    const [isSubmitting, setIsSubmitting] = useState(false);  
    const [user, setUser] = useState({})
   
    
      const handleChange = (e)=>{
        const {name, value} = e.target;

        //setIsSubmitting(false);
        const newValues = {...values, [name]: value};       
        isSent && setErrors(validate(newValues));
        console.log("newValues = " + value );
        setValues(values =>(newValues));
      };     
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validate(values));    
        //setUser(login(values));  
        setUser(login(values));
        setIsSubmitting(true);
        setIsSent(true);          
       }   

      useEffect(()=>{ 
        console.log(errors); 
        console.log(isSent);       
        console.log(isSubmitting);
        console.log(initValues);
        console.log(callback);
        console.log(user);
          if(Object.keys(errors).length === 0 && isSubmitting && isSent && Object.keys(user).length !==0){
            console.log(user)
              callback(                      
                //setValues(initValues)
              )
          }else{
            setValues(initValues);
            alert('Nema usera')

          }
      }, [errors, isSent, isSubmitting, initValues])    

     

      const handleReset = (e)=>{
        setValues(initValues);
      }

   return{
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    user
} 
}

export default useForm;