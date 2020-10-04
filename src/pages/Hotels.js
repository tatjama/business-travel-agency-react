import React from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers  from '../components/CommentFromUsers';
import useFetchComments from '../hooks/useFetchComments';

const Hotels = (props) =>{
    const {query, comments, fetchComments, isLoading} = useFetchComments();
    
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
                            {isLoading?
                                <div className = "loader">Loading...</div>
                                :
                                (query === item.result_object.location_id) &&
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