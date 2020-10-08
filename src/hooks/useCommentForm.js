import React, {useState, UseEffect} from 'react';

const useCommentForm = () => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsSubmitted(false)
        const newValues = {...values, [name]: value}
        setErrors(validateCommentForm(newValues))
        setValues(values => newValues)        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();    
        setErrors(validateCommentForm(values)) 
        setIsSubmitted(true);   
        const d = new Date();
        const newId = Math.floor((Math.random()*100000000000) + 10000000)  + "user"
        const newValues = {...values, published_date: d, id: newId,  
                            user: {username: props.user.logInUser.firstName,
                                    avatar: {small: {url: avatar}}
            }}
        const newCommentValues = {comment:newValues}
        setCommentValues(newCommentValues)        
    }
    useEffect(() => {
        let commentsArray = []
        commentsArray =JSON.parse(localStorage.getItem('commentsArray')) || []
         commentsArray.push(commentValues)   
         if(Object.keys(errors).length === 0 && isSubmitted)    
        {
            //console.log(commentValues)        
        localStorage.setItem('commentsArray', JSON.stringify(commentsArray))
        setValues(initialValues)
        }
        
        
    }, [isSubmitted])
    

}

export default useCommentForm;