import React, {useState} from 'react';
import Button from '../components/Button';

const Restaurants = (props) => {
    const [comments, setComments] = useState([])
    const [id, setId] = useState(null)
    console.log(props.restaurants.location_id)
    const fetchRestaurantComments = async () => {
        setId(props.restaurants.location_id)
        console.log(id)
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&lang=en_US&location_id=17514467`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	    }
    })
    const comments = await data.json();
    setComments(comments.data);
    console.log(comments)
 } 

 return(
        <div>
                 <h3>Food and Entertainment</h3>
                 {console.log(props.restaurants)}
                 <div id="showTransportation">
                   {props.restaurants.map((restaurant) =>{
                    return(
                        <div key = {restaurant.location_id}>
                             
                                <h1>Name:{restaurant.name}</h1>
                    <div className="middle-wrapper ">
                        <div className="provider-div ">
                        <div className="provider-heading ">
                            <div className="item">                                
                                <img className="provider-logo " 
                                    src={restaurant.photo.images.small.url} 
                                    alt = {restaurant.name}
                                />
                                {/*props.header.photo.caption*/}
                             </div>
                             <div className="item ">
                                        <h3>DESCRIPTION</h3>
                                        <p>{restaurant.description}</p> 
                                    </div>
                             <div className = "item">   
                                <p>Name: {restaurant.name}</p>                                                    
                               <p> Type: Restaurant</p>    
                               <p>Price: {restaurant.price}</p>                             
                                <p>Category: {restaurant.ranking_category}</p>
                                <p>Rating: {restaurant.rating}</p>
                                <p>Ranking: {restaurant.ranking}</p>
                                 <p>Ranking position: {restaurant.ranking_position}</p>                          
                            </div>
                            <div className="item ">
                                        <p><span className = "info-restaurant"> Name: </span> {restaurant.name}</p>
                                        <p><span className = "info-restaurant">Address: </span> {restaurant.address}</p>
                                        <p><span className = "info-restaurant">Phone: </span>{restaurant.phone}</p>
                                        <p><span className = "info-restaurant">Email:</span> {restaurant.email}</p>
                                        <p><span className = "info-restaurant">Website:</span> {restaurant.website}</p>
                                        <p><span className = "info-restaurant">LONGITUDE:</span> {restaurant.longitude}</p>
                                        <p><span className = "info-restaurant">LATITUDE:</span> {restaurant.latitude}</p>
                                        <p><span className = "info-restaurant">ID: </span>{restaurant.location_id}</p>
                                    </div>
                        </div>
                           
                                                                       <Button name = "See Comments"
                                    handleOnClick = {fetchRestaurantComments} 
                                    />
                                
                        </div>
                    </div>
                         
                          
                              
                                                      <div >
                               {/*console.log(comments)*/}
                               {comments.map((comment) => {
                                   return(
                                       <div key = {comment.id} >
                                           <h1>Title: {comment.title}</h1>
                                           <h2>ID: {comment.id}</h2>
                                       </div>
                                   )
                               })}
                           </div>
                        </div>
                    )
                })}
                </div>
             </div>
    )
}

export default Restaurants;