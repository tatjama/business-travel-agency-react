import { useState, useEffect } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils
import { getCommentsURL } from '../utils/constants';

const useFetchComments = (callback) => {
    const { isUserAuthenticated} = useAppContext(); 
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchComments = async (id) => {
         setIsError(false)
         setIsLoading(true)

         try {             
         const data = await
         fetch(getCommentsURL(id), {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
                 "x-rapidapi-key": isUserAuthenticated.rk
         }
     })
     const comments = await data.json();
     setComments(comments.data);
     setQuery(id);
         } catch (error) {
             setIsError(true)
         }  

     setIsLoading(false)  
  }

  useEffect(() => {       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments, isLoading, isError}
}

export default useFetchComments;