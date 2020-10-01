import React, { useState} from 'react';
import Button from '../components/Button';
import { useAppContext } from '../libs/contextLib';
import Airports from './Airports';
import Attractions from './Attractions';
import CityInfo from './CityInfo';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
import SelectForm from '../components/SelectForm';
import SectionFirstLife from '../components/SectionFirstLife';
import breakfast from '../images/breakfast.webp';
import hotel from '../images/hotel.webp';
import world from '../images/world.webp';
import airplane from '../images/airplane.webp';


const City =({match}) =>{    
    console.log(match)
   // console.log(match), match is params sent from previous page
    const [info, setInfo] = useState([])  
    const [header, setHeader] = useState([])  
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])    
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [airports, setAirports] = useState([])

   // const rapidKey = "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"
    const [items, setItems] = useState([])
    const [id, setId] = useState(null);
    
    
      
    const fetchCityInformation = async() =>{
        setIsFetch(false)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        const data = await 
     //props is name of the city sent from previous page
            fetch(`https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${match.params.id}`, {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		            "x-rapidapi-key": rapidKey
	            }
            })
            const info = await data.json();
            let infoArray = [];
            infoArray = JSON.parse(localStorage.getItem("fetchCityInformation")) || [];
            infoArray.push(info);
            localStorage.setItem('fetchCityInformation', JSON.stringify(infoArray));
            setIsFetch(true)
            console.log(info);
            setHotels(info.data.filter((hotel) => {
                return(
                    hotel.result_type === "lodging"
                    && hotel.result_object.photo //if hotel image does not exist filter hotels
                    && hotel.review_snippet
                )}
            ))
            setAttractions(info.data.filter((attraction) =>{
                return(
                  attraction.result_type === "things_to_do" 
                  && attraction.result_object.photo
                  && attraction.review_snippet// if review snippet does not exist
                  
                )}
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
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&
        lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=${header.location_id}`
        ,{
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": rapidKey
	        }
        })
        const restaurants = await data.json();        
        let restaurantsArray = [];
        restaurantsArray = JSON.parse(localStorage.getItem('fetchRestaurantsInformation')) || [];
        restaurantsArray.push(restaurants);
        localStorage.setItem('fetchRestaurantsInformation', JSON.stringify(restaurantsArray));

        setRestaurants(restaurants.data.filter(restaurant =>{
            return(
                restaurant.location_id !== "294472" &&
                restaurant.photo //if photo does not exist
            )
        }))
        console.log(restaurants)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(true);
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
              "x-rapidapi-key": rapidKey
          }
      })
        const airports = await data.json();
        let airportsArray = [];
        airportsArray = JSON.parse(localStorage.getItem('fetchAirportsInformation')) || [];
        airportsArray.push(airports);
        localStorage.setItem('fetchAirportsInformation',JSON.stringify(airportsArray))
        setAirports(airports);
        setIsAirportsFetch(true);       
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
    }
    const figureProps =  [
    {
        name: "Restaurants", 
        source: breakfast,
        handleOnClick: fetchRestaurantInformation,
        alt: "breakfast" ,
        go: "#food"
    },
    {
        name: "Hotels", 
        source: hotel, 
        handleOnClick: fetchHotelsInformation,
        alt: "friends hands" ,
        go: "#safety"
    },
    {
        name: "Attractions" ,
        source: world, 
        handleOnClick: fetchAttractionsInformation,
        alt: "world" ,
        go: "#culture"
    },
    {
        name: "Airports", 
        source: airplane, 
        handleOnClick: fetchAirportsInformation,
        alt: "airplane" ,
        go: "#airport"
    }]
    const {isUserAuthenticated} = useAppContext();
    console.log(isUserAuthenticated)
    return(
        <div>     
             <header className="header" id="header-life" >
                <div id="message"></div>        
                 <SelectForm />          
            </header>
                <Button
                    className = "life-button"
                    name = {`Show information about ${match.params.id}`} 
                    handleOnClick = {fetchCityInformation}
                />
                <div className = "wrapper">
                {isFetch && 
                    <div >
                        <h3>Life in different countries....</h3>
                            <SectionFirstLife info = {figureProps}/>
                        <div >                      
                            <CityInfo header = {header}/>
                        </div>                  
                    
                    </div>  
                    }            
                    {isRestaurantsFetch &&            
                        <Restaurants restaurants = {restaurants}/>
                    }
                    
                    {isHotelsFetch &&
                        <Hotels hotels = {hotels}/>
                    }
                    {isAttractionsFetch &&
                        <Attractions attractions = {attractions}/>
                    }
                    {isAirportsFetch &&
                        <Airports airports = {airports}/>                
                    }              
                 </div>
        </div>    
    )
}

export default City;