import React, {useEffect, useState} from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers  from '../components/CommentFromUsers';

const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"

const Hotels = (props) =>{
    const [comments, setComments] = useState([]);   
    const [query, setQuery] = useState(null) 

    /*const fetchHotelsComments = () => {
        useEffect(
            setQuery()
        )
    }*/

    const fetchComments = async (id) => {
        // setId(props.restaurants.location_id)
         console.log(id)
        let commentArray = []
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
     commentArray  = JSON.parse(localStorage.getItem("fetchComment")) || [];
     commentArray.push(comments);
     localStorage.setItem("fetchComment", JSON.stringify(commentArray))
  }
    return(
        <div>
                    {console.log(props.hotels)}
                    <h1 className = "main-header">HOTELS </h1>
                    <div className = "main-div" id = "hotels">
                    {props.hotels.map((item) => {
                  return(                      
                      <div key = {item.result_object.location_id} className = "data-selected">
                                                    
                          <h1> {item.result_object.name}</h1>
                          <h2>Rating: {item.result_object.rating}</h2>
                          <div className = "data-info">  
                            <div className = "data-left">
                                {item.result_object.photo.images.small.url?
                                <img 
                                    src = {item.result_object.photo.images.small.url} 
                                    alt = {item.result_object.name}
                                />:
                                <img
                                    src = {avatarImage}
                                    alt = "generic"
                                    style = {{ height: "150px"}}
                                />
                            }
                                </div> 
                            <div className = "data-right"> 
                                <p>Address: <span>{item.result_object.address}</span></p>
                                <p>ID: <span>{item.result_object.location_id}</span></p>
                                <p>Category: <span>{item.result_object.category.name}</span></p>
                                <p>Rating: <span>{item.result_object.rating}</span></p>
                                <p>Review snippet: <span>{item.review_snippet.snippet}</span></p>
                                <p>Type: <span>{item.result_type}</span></p>    
                            </div>  
                          </div> 
                          <div>
                            <Button 
                                id = {item.result_object.location_id}
                                name = "See Comments"
                                handleOnClick = {() => fetchComments(item.result_object.location_id)}
                            />
                            {
                                (query == item.result_object.location_id) &&
                            <div>
                             {comments.map((comment) => {
                                return(
                                    <div key = {comment.id}>
                                        <CommentFromUsers comment = {comment}/>
                                   </div>
                                )
                            })}
                            </div>
                            }
  
                          </div>
                          <hr style={{"border":"3px solid #f1f1f1 "}}/>                
                      </div>
                  )
                  
              })}
                    </div>             
                </div>
    )
}

export default Hotels;