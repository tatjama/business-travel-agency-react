import React, { useState, useEffect } from 'react';

const City =({}) =>{
   // console.log(match)
    const [info, setInfo] = useState([])  
    const [header, setHeader] = useState([])  
    const [items, setItems] = useState([])
    const [id, setId] = useState(null);
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])

    const fetchCityInformation = async() =>{
        const data = await 
     
fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=belgrade", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	}
})
        const info = await data.json();
        setIsFetch(true)
      console.log(info);
      setHotels(info.data.filter((hotel) => {
        return(
            hotel.result_type === "lodging"
        )
      }))
      setAttractions(info.data.filter((attraction) =>{
          return(
              attraction.result_type === "things_to_do"
          )
      }

      ))
      setInfo(info.data);
      console.log(info)
      setHeader(info.data[0].result_object)
      console.log(header)
      setId(header.location_id);
      setItems(info.data[0].result_object.category_counts)
      

        

    }
    const fetchRestaurantInformation = async() =>{
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=${header.location_id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	}
})
    const restaurants = await data.json();
    setIsRestaurantsFetch(true)
    setRestaurants(restaurants.data.filter(restaurant =>{
        return(
            restaurant.location_id !== "294472"
        )
    }))
    console.log(restaurants)
    

      }
      const fetchHotelsInformation = () =>{
        setIsHotelsFetch(true) 
      }

      const fetchAttractionsInformation = () =>{
          setIsAttractionsFetch(true)
      }
      
    return(
        <div>
              <button onClick = {fetchCityInformation}>Info</button>
              
              {console.log(header.category_counts)}
              {console.log(items.restaurants)}
              {isFetch && <div>
                <button onClick = {fetchRestaurantInformation}>Restaurants</button>
                <button onClick = {fetchHotelsInformation}>Hotels</button>
                <button onClick = {fetchAttractionsInformation}>Attractions</button>
             <h1>City: {header.name}</h1> 
             <h2>LONGITUDE: {header.longitude}</h2>
             <h2>LATITUDE: {header.latitude}</h2>
             <h2>ID: {header.location_id}</h2>   
             <h2>DESCRIPTION: {header.geo_description}</h2>
             </div>}
            {/**
             * <p>Restaurants: {header.category_counts.restaurants.total}</p>
            <p><ul>Accommodations
                <li>Hotels: {header.category_counts.accommodations.hotels}</li>
                <li>BBS Inns: {header.category_counts.accommodations.bbs_inns}</li>
                <li>Others: {header.category_counts.accommodations.others}</li>
                Total: {header.category_counts.accommodations.total}
            </ul></p>
    <p><ul>Attractions: Total {header.category_counts.attractions.total}
                <li>Activities: {header.category_counts.attractions.activities}</li>
                <li>Attractions: {header.category_counts.attractions.attractions}</li>
                <li>Shopping: {header.category_counts.attractions.shopping}</li>
                <li>Nightlife: {header.category_counts.attractions.nightlife}</li>
    </ul></p>
             */} 
             {//RESTAURANTS INFO
             isRestaurantsFetch &&
             <div>
                 <h3>Food and Entertainment</h3>
                 {console.log(restaurants)}
                   {restaurants.map((restaurant) =>{
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
             }
             {//HOTELS INFO
                isHotelsFetch &&
                <div>
                    {console.log(hotels)}
                    {hotels.map((item) => {
                  return(                      
                      <div key = {item.result_object.location_id}>
                                                    
                          <h1>Name: {item.result_object.name}</h1>
                          <img src = {item.result_object.photo.images.small.url} alt = {item.result_object.name}/>
                          <h2>Address: {item.result_object.address}</h2>
                          <h2>ID: {item.result_object.location_id}</h2>
                          <h2>Category: {item.result_object.category.name}</h2>
                          <h2>Rating: {item.result_object.rating}</h2>
                          <h2>Review snippet: {item.review_snippet.snippet}</h2>
                          <span>Type: {item.result_type}</span>                        
                      </div>
                  )
              })}
                </div>
             }
             {//ATTRACTIONS INFO
                isAttractionsFetch &&
                <div>
                    {console.log(attractions)}
                    {
                        attractions.map((attraction) => {
                            return(
                                <div key = {attraction.result_object.location_id}>
                                    <h1>Name: {attraction.result_object.name}</h1>
                                    <img 
                                        src = {attraction.result_object.photo.images.small.url} 
                                        alt = {attraction.result_object.name}
                                    />                          
                                    <h2>Address: {attraction.result_object.address}</h2>                          
                                    <h2>ID: {attraction.result_object.location_id}</h2>
                                    <h2>Category: {attraction.result_object.category.name}</h2>
                                    <h2>Rating: {attraction.result_object.rating}</h2>
                                    <h2>Review snippet: {attraction.review_snippet.snippet}</h2>
                                    <span>Type: {attraction.result_type}</span>
                                </div>
                            )
                        })
                    }
                    
                </div>

             }
                
              
        </div>
    
    )
}

export default City;