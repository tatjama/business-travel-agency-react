import { useState, useEffect } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils
import { getCommentsURL, header } from '../utils/constants';

const useFetchComments = (callback, setError, setIsLoading) => {
    const { isUserAuthenticated} = useAppContext(); 
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);

    const fetchComments = async (id) => {
         setError(null)
         setIsLoading(true)

         try {             
         const response = await
         fetch(getCommentsURL(id), 
         header(process.env.REACT_APP_RAPID_API_HOST, isUserAuthenticated.rk));
         const data = await response.json();
         setComments(data.data);
         setQuery(id);
         } catch (error) {
             setError(error.data)
         }  

     setIsLoading(false)  
  }

  useEffect(() => {       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments}
}

export default useFetchComments;