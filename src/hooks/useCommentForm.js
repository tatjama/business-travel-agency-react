import {useState, useEffect} from 'react';

const useCommentForm = (callback, validate, initValues  ) => {
    
    const [values, setValues] = useState(initValues)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsSubmitted(false)
        const newValues = {...values, [name]: value}
        setErrors(validate(newValues))
        setValues(values => newValues) 
        console.log(values)       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();    
        setErrors(validate(values))   
        setIsSubmitted(true);
    }    
    
    useEffect(() => {
         if(Object.keys(errors).length === 0 && isSubmitted)    
        {        
        callback(setValues(initValues))        
        }        
    }, [isSubmitted, errors, initValues])

    const handleReset = (e) => {
        setValues(initValues)
    }
    return{
        values,
        errors,  
        handleChange, 
        handleSubmit, 
        handleReset
    }

}

export default useCommentForm;