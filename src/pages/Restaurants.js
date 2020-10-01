import React, {useState} from 'react';
import avatarImage from '../images/travel-and-tourism.png';

const Restaurants = (props) => {    
    console.log(props.restaurants.location_id);     

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
                                            <p>Name: <span>{restaurant.name}</span></p>
                                            <p>Address: <span>{restaurant.address}</span></p>
                                            <p>Phone: <span>{restaurant.phone}</span></p>
                                            <p>Email: <span>{restaurant.email}</span></p>
                                            <p>Website: <span>{restaurant.website}</span></p>
                                            <p>LONGITUDE: <span>{restaurant.longitude}</span></p>
                                            <p>LATITUDE: <span>{restaurant.latitude}</span></p>
                                            
                                        </div>
                                        <div className = "data-restaurant">                                                    
                                            <p>Type: <span>Restaurant</span></p>    
                                            <p>Price: <span>{restaurant.price}</span></p>                             
                                            <p>Category: <span>{restaurant.ranking_category}</span></p>
                                            <p>Rating: <span>{restaurant.rating}</span></p>
                                            <p>Ranking: <span>{restaurant.ranking}</span></p>
                                            <p>Ranking position: <span>{restaurant.ranking_position}</span></p>
                                            <p>ID: <span>{restaurant.location_id}</span></p>
                                        </div>
                                </div>                               
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
