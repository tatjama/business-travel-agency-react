import React, {useState} from 'react';
import avatarImage from '../images/travel-and-tourism.png';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';
import useFetchComments from '../hooks/useFetchComments';
import LeaveCommentForm from '../components/LeaveCommentForm';
import createCommentArray from '../components/utils/createCommentsArray';


const Restaurants = (props) => {    
    console.log(props.restaurants.location_id);  

    const [isCommentForm, setIsCommentForm] = useState(false);
    const [locationCommentId, setLocationCommentId] = useState(null);
    const [commentFromUser, setCommentFromUser] = useState({});    
    const [commentsFromLocalStorageAndFetchComments, setCommentsFromLocalStorageAndFetchComments] = useState([])
    
    const { query, comments, fetchComments, isLoading, isError} = useFetchComments(submitted);

    function submitted(){      
        const commentsArray = createCommentArray(query, comments)
         setCommentsFromLocalStorageAndFetchComments(commentsArray)
       }
   
       const openCommentForm = (resultObject) => {
         setLocationCommentId(resultObject.location_id);
         setCommentFromUser(resultObject)
         console.log(resultObject)
         setIsCommentForm(true)
       }
   
       const closeCommentForm = () =>{
       setIsCommentForm(false)
       }

 return(
        <div>                 
            {console.log(props.restaurants)}
            <h1 className = "main-header">RESTAURANTS </h1>
            <div className = "main-div" id = "restaurants">
                {props.restaurants.map((restaurant) =>{
                    return(
                        <div key = {restaurant.location_id} className = "data-selected">                             
                            <h1>{restaurant.name}</h1>
                            <h2>Rating: {restaurant.rating}</h2>
                            <div >
                                <div className = "data-info">
                                    <div className = "data-left">
                                    {restaurant.photo.images.small.url?
                                        <img 
                                            src = {restaurant.photo.images.small.url} 
                                            alt = {restaurant.name}
                                            style= {{maxWidth: "230px"}}
                                        />:
                                        <img
                                            src = {avatarImage}
                                            alt = "generic"
                                            style = {{ height: "150px"}}
                                        />
                                    }
                                    </div>
                                    <div className = "data-right">
                                        <h3>DESCRIPTION</h3>
                                        {restaurant.description?
                                        <p><span>{restaurant.description}</span></p> 
                                        : <p><span>Description is not available</span></p>           
                                        }
                                    </div>
                                    
                                    <hr style={{"border":"3px solid #f1f1f1 "}}/> 
                                </div>
                                <div className = "data-info">
                                    <div className = "data-restaurant">
                                        <h3>CONTACT</h3>
                                            <p>Name: <span>{restaurant.name}</span></p>
                                            <p>Address: <span>{restaurant.address}</span></p>
                                            <p>Phone: <span>{restaurant.phone}</span></p>
                                            <p>Email: <span>{restaurant.email}</span></p>
                                            <p>Website: <span>{restaurant.website}</span></p>
                                            
                                            
                                    </div>
                                    <div className = "data-restaurant"> 
                                        <h3>INFO</h3>                                                   
                                            <p>Type: <span>Restaurant</span></p>   
                                            <p>LONGITUDE: <span>{restaurant.longitude}</span></p>
                                            <p>LATITUDE: <span>{restaurant.latitude}</span></p>
                                            <p>ID: <span>{restaurant.location_id}</span></p>
                                    </div>
                                    <div className = "data-restaurant">
                                        <h3>RATING</h3>
                                        <p>Rating: <span>{restaurant.rating}</span></p>
                                        <p>Ranking: <span>{restaurant.ranking}</span></p>                                                                   
                                        <p>Category: <span>{restaurant.ranking_category}</span></p>
                                        <p>Ranking position: <span>{restaurant.ranking_position}</span></p>                                           
                                        <p>Price: <span>{restaurant.price}</span></p>    

                                    </div>
                                </div>                               
                            </div>              
                            <div>
                            <Button 
                                id = {restaurant.location_id}
                                name = "See Comments"
                                handleOnClick = {() => fetchComments(restaurant.location_id)}
                            />
                            <Button
                                    className = "comment-button"
                                    name = "Leave a Comment"
                                    handleOnClick = {() => 
                                        openCommentForm(restaurant
                                            )}
                                />
                                {locationCommentId === restaurant.location_id && 
                                 isCommentForm &&
                                    <LeaveCommentForm
                                        handleOnClick = {closeCommentForm}
                                        info = {commentFromUser}
                                    />
                                }
                            {isError && <div className = "error">Error. Something went wrong...</div>}
                            {isLoading?
                                <div className = "loader">Loading...</div>
                                :
                                (query === restaurant.location_id) &&
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

export default Restaurants;
