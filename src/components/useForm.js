import {useState} from 'react';

const useForm = (callback)=> {
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
        //signUp();
        callback();
      }
    
   return{
    values,
    handleChange,
    handleSubmit
} 
}

export default useForm;