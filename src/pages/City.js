import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Airports from './Airports';
import Attractions from './Attractions';
import Hotels from './Hotels';
import Restaurants from './Restaurants';

const City =({}) =>{
   // console.log(match), match is params sent from previous page

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
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [airports, setAirports] = useState([])

      
    const fetchCityInformation = async() =>{
        const data = await 
     //props is name of the city sent from previous page
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
    setIsAirportsFetch(false);
    setIsAttractionsFetch(false);
    setIsHotelsFetch(false);
    setIsRestaurantsFetch(true);

    setRestaurants(restaurants.data.filter(restaurant =>{
        return(
            restaurant.location_id !== "294472"
        )
    }))
    console.log(restaurants)
    

      }
      const fetchHotelsInformation = () =>{
        
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(true);
        setIsRestaurantsFetch(false);
      }

      const fetchAttractionsInformation = () =>{
          
        setIsAirportsFetch(false);
        setIsAttractionsFetch(true);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
      }
      
    const fetchAirportsInformation = async() =>{
        const data =
        await fetch(`https://tripadvisor1.p.rapidapi.com/airports/search?locale=en_US&query=${header.name}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
              "x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
          }
      })
     const airports = await data.json();
      setIsAirportsFetch(true);       
      setIsAttractionsFetch(false);
      setIsHotelsFetch(false);
      setIsRestaurantsFetch(false);

     setAirports(airports)
     
    }
    const buttons = [
        {name:"Restaurants", click: fetchRestaurantInformation},
        {name: "Hotels", click: fetchHotelsInformation},
        {name: "Attractions", click: fetchAttractionsInformation},
        {name: "Airports", click: fetchAirportsInformation}
    ]

      
      
    return(
        <div>             
              <Button
                name = "Info"
                handleOnClick = {fetchCityInformation}
              />
              {isFetch && 
                <div>     
                    {//SET BUTTONS
                    buttons.map((button) => {
                        return(
                            <Button 
                                key = {button.name}
                                name = {button.name}
                                handleOnClick = {button.click}
                            />
                        )
                    })}           
                   
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
                <Restaurants
                    restaurants = {restaurants}
                />
             }
             {//HOTELS INFO
                isHotelsFetch &&
                <Hotels
                    hotels = {hotels}
                />
             }
             {//ATTRACTIONS INFO
                isAttractionsFetch &&
               <Attractions
                    attractions = {attractions}
               />
             }
            {//AIRPORTS INFO
            
                isAirportsFetch &&
                <Airports 
                    airports = {airports}
                />
                
            }    
              
        </div>
    
    )
}

export default City;