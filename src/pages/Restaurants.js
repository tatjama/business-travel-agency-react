import React from 'react';

const Restaurants = (props) => {
    return(
        <div>
                 <h3>Food and Entertainment</h3>
                 {console.log(props.restaurants)}
                   {props.restaurants.map((restaurant) =>{
                    return(
                        <div key = {restaurant.location_id}>
                           <h1>Name: {restaurant.name}</h1>
                           <img src = {restaurant.photo.images.small.url} alt = {restaurant.name}/>
                           <h2>Address: {restaurant.address}</h2>
                           <h2>Phone: {restaurant.phone}</h2>
                           <h2>E-mail: {restaurant.email}</h2>
                            <h2>Website: {restaurant.website}</h2>
                           <h2>Category: {restaurant.ranking_category}</h2>
                           <h2>Rating: {restaurant.rating}</h2>
                           <h2>Ranking: {restaurant.ranking}</h2>
                           <h2>Ranking position: {restaurant.ranking_position}</h2>
                           <h2>Price: {restaurant.price}</h2>
                           <p>Description: {restaurant.description}</p>
                           
                           <p>ID: {restaurant.location_id}</p>
                           
                        </div>
                    )
                })}

             </div>
    )
}

export default Restaurants;