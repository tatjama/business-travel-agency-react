import {useState} from 'react';

const useFetchComments = () => {
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState(null);


    const fetchComments = async (id) => {
         console.log(id)
       // let commentArray = []
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
     /* LocalStorage
     commentArray  = JSON.parse(localStorage.getItem("fetchComment")) || [];
     commentArray.push(comments);
     localStorage.setItem("fetchComment", JSON.stringify(commentArray))*/
  }

  return{query,comments, fetchComments}
}

export default useFetchComments;