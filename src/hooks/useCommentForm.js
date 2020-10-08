import {useState, useEffect} from 'react';

const useCommentForm = (initialValues, initialCommentValues, validateCommentForm, callback) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [commentValues, setCommentValues] = useState(initialCommentValues)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsSubmitted(false)
        const newValues = {...values, [name]: value}
        setErrors(validateCommentForm(newValues))
        setValues(values => newValues) 
        console.log(values)       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();    
        setErrors(validateCommentForm(values))          
       // setErrors(validateCommentForm(commentValues))
        setIsSubmitted(true);
    }
    
    
    useEffect(() => {
         if(Object.keys(errors).length === 0 && isSubmitted)    
        {
            //console.log(commentValues)        
        callback(setValues(initialValues))
        
        }
        
        
    }, [isSubmitted, errors, initialValues])
    const handleReset = (e) => {
        setValues(initialValues)
    }
    return{
        values, errors,  handleChange, handleSubmit, handleReset
    }

}

export default useCommentForm;