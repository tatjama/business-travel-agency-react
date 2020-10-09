import React, {useState, useEffect} from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';
import useFetchComments from '../hooks/useFetchComments';
import LeaveCommentForm from '../components/LeaveCommentForm';



const Attractions  = (props) =>{
    const [isCommentForm, setIsCommentForm] = useState(false);
    const [locationName, setLocationName] = useState('');
    const [locationCommentId, setLocationCommentId] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [type, setType] = useState('');
    const [locationImage, setLocationImage] = useState('');
    const [rating, setRating] = useState(null);
    const [num_reviews, setNum_reviews] = useState(null);
    const [commentsFromLocalStorageAndFetchComments, setCommentsFromLocalStorageAndFetchComments] = useState([])
    
  const {query, comments, fetchComments, isLoading, isError} =  useFetchComments(submitted);
  function submitted(){
      
      const commentsArrayFromStorage = JSON.parse(localStorage.getItem('commentsArray')) || []
      function checkIdOnArray(commentFromStorage){
          return commentFromStorage.result_object.location_id == query
      }
      const commentsFilterArray = commentsArrayFromStorage.filter(checkIdOnArray)
      const newCommentsFilterArray = commentsFilterArray.map(comment => comment.comment )
      const commentsArray = newCommentsFilterArray.concat(comments)
      setCommentsFromLocalStorageAndFetchComments(commentsArray)
  }
  const openCommentForm = (location_id, name, type, address, location, latitude, longitude, locationImage, rating, num_reviews) => {
      setIsCommentForm(true)
      setLocationName(name);
      setLocationCommentId(location_id);
      setCommentId(location_id);
      setType(type);
      setLocationImage(locationImage);
      setRating(rating);
      setNum_reviews(num_reviews);
      console.log("Leave a comment about: " + name + " address: " + address + " type: "+ type + 
      " and location id " + location_id + " location " + location + " latitude: " + latitude + " longitude: " 
      + longitude + " rating " + rating + " number of reviews " + num_reviews)
      
  }
const closeCommentForm = () =>{
    setIsCommentForm(false)
}
    return(
        <div>
        {console.log(props.attractions)}
            <h1 className = "main-header">ATTRACTIONS </h1>
            <div className = "main-div" id = "attractions">
                {props.attractions.map((attraction) => {
                    return(
                        <div key = {attraction.result_object.location_id} className = "data-selected">
                            <h1> {attraction.result_object.name}</h1>
                            <h2>Rating: {attraction.result_object.rating}</h2>
                            <div className = "data-info">
                                <div className = "data-left">
                                    {attraction.result_object.photo.images.small.url?
                                        <img 
                                            src = {attraction.result_object.photo.images.small.url} 
                                            alt = {attraction.result_object.name}
                                        />:
                                        <img
                                            src = {avatarImage}
                                            alt = "generic"
                                            style = {{ height: "150px"}}
                                        />
                                    }                                           
                                </div>   
                                <div className = "data-right">              
                                    <p>Address: <span>{attraction.result_object.address}</span></p>                          
                                    <p>ID: <span>{attraction.result_object.location_id}</span></p>
                                    <p>Category: <span>{attraction.result_object.category.name}</span></p>                        
                                    <p>Review snippet: <span>{attraction.review_snippet.snippet}</span></p>
                                    <p>Type: <span>{attraction.result_type}</span></p>
                                </div>
                            </div>
                            <div>
                                <Button 
                                    id = {attraction.result_object.location_id}
                                    className = "comment-button"
                                    name = "See Comments"
                                    handleOnClick = {() => fetchComments(attraction.result_object.location_id)}
                                />
                                <Button
                                    className = "comment-button"
                                    name = "Leave a Comment"
                                    handleOnClick = {() => 
                                        openCommentForm(attraction.result_object.location_id, 
                                            attraction.result_object.name, 
                                            attraction.result_type,
                                            attraction.result_object.address,
                                            attraction.result_object.location_string,
                                            attraction.result_object.latitude,
                                            attraction.result_object.longitude,
                                            attraction.result_object.photo.images.small.url,
                                            attraction.result_object.rating,
                                            attraction.result_object.num_reviews
                                            )}
                                />
                                {locationCommentId === attraction.result_object.location_id && 
                                 isCommentForm &&
                                    <LeaveCommentForm
                                        locationId = {locationCommentId}
                                        locationName = {locationName}
                                        type = {type}
                                        commentId = {commentId}
                                        source = {locationImage}
                                        handleOnClick = {closeCommentForm}
                                        user = {props.user}
                                        rating = {rating}
                                        num_reviews = {num_reviews}
                                    />
                                }
                            {isError && <div className = "error">Error. Something went wrong...</div>}
                            {isLoading?
                                <div className = "loader">Loading...</div>
                                :
                                (query === attraction.result_object.location_id) &&
                            <div>
                             {commentsFromLocalStorageAndFetchComments.map((comment) => {
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

export default Attractions;