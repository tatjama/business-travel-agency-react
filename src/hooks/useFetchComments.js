import { useState, useEffect } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils
import { getCommentsURL } from '../utils/constants';

const useFetchComments = (callback, setError, setIsLoading) => {
    const { isUserAuthenticated} = useAppContext(); 
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);

    const fetchComments = async (id) => {
         setError(null)
         setIsLoading(true)

         try {             
         const response = await
         fetch(getCommentsURL(id), {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
                 "x-rapidapi-key": isUserAuthenticated.rk
         }
     })
     const data = await response.json();
     setComments(data.data);
     setQuery(id);
         } catch (error) {
             setError(error)
         }  

     setIsLoading(false)  
  }

  useEffect(() => {       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments}
}

export default useFetchComments;