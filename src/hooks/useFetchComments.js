import {useState, useEffect} from 'react';

const useFetchComments = (callback) => {
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchComments = async (id) => {
         console.log(id)
         setIsError(false)
         setIsLoading(true)
         try {             
         const data = await
         fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&
         lang=en_US&location_id=${id}`, {
             "method": "GET",
             "headers": {
                 "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                 "x-rapidapi-key": rapidKey
         }
     })
     const comments = await data.json();
     await setComments(comments.data);
     await setQuery(id);
     console.log(comments);
         } catch (error) {
             setIsError(true)
         }  
     setIsLoading(false)  
  }
  useEffect(() => {
      console.log(query)
      console.log(comments)       
          callback()      
  }, [query, comments])

  return{query,comments, fetchComments, isLoading, isError}
}

export default useFetchComments;