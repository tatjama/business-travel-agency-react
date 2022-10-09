import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import Loader from 'react-loader-spinner';
//components
import SelectForm from '../components/SelectForm';
import SectionFirst from '../components/SectionFirst';
//context
import { useAppContext } from '../libs/contextLib';
//pages
import Airports from './Airports';
import Attractions from './Attractions';
import CityInfo from './CityInfo';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
//assets
import arrowUp from '../images/arrow-up.svg';
//styles
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//utils
import { getCityInformationURL, 
         getRestaurantInformationURL, 
         getAirportsInformationURL, 
         figureProps } from '../utils/constants';

const City =({match}) =>{   
    
    const [city, setCity] = useState(null);
    const [header, setHeader] = useState([])  
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])    
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [airports, setAirports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {isUserAuthenticated} = useAppContext();
    const [position, setPosition] = useState("horizontalPosition");
    
    const scrollFunction = () => {
        (window.scrollY > 850)? setPosition("verticalPosition"): setPosition("horizontalPosition")        
    }
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
    }, [window.onscroll]);

    useEffect(() => {
        match.params.id && setCity(match.params.id.split('-')[1])
    },[match.params.id])

    useEffect(() => {
      city &&  fetchCityInformation(city);
    },[city])

    const fetchCityInformation = async(city) =>{
        setIsError(false)
        setIsLoading(true)
        setIsFetch(false)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        try {            
        const data = await 
        //props is name of the city sent from previous page
               fetch(getCityInformationURL(city), {
                   "method": "GET",
                   "headers": {
                       "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
                       "x-rapidapi-key": isUserAuthenticated.rk
                   }
               })
               
               const info = await data.json();
               setIsFetch(true)
               setHeader(info.data[0].result_object)
   
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
        } catch (error) {
            setIsError(true)
        }             
        setIsLoading(false)    
        scrollToSection("section-first")   
    }
    const fetchRestaurantInformation = async() =>{
        setIsError(false)
        setIsLoading(true)
        try {
            const data = await
        fetch(getRestaurantInformationURL(header.location_id),{
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
		        "x-rapidapi-key": isUserAuthenticated.rk
	        }
        })
        const restaurants = await data.json();    
        setRestaurants(restaurants.data.filter(restaurant =>{
            return(
                restaurant.location_id !== "294472" &&
                restaurant.photo //if photo does not exist
            )
        }))
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(true);
        
            
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
        scrollToSection("restaurants")
    }

    const getHotelsInformation = () =>{        
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(true);
        setIsRestaurantsFetch(false);
        scrollToSection("hotels");
      }

    const getAttractionsInformation = () =>{   
        setIsError(false)  
        try {
        setIsAirportsFetch(false);
        setIsAttractionsFetch(true);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
            
        } catch (error) {
            setIsError(true)
        }     
        
        scrollToSection("attractions")
      }
      
    const fetchAirportsInformation = async() =>{
        setIsError(false)
        setIsLoading(true)
        try {
            const data =
        await fetch(getAirportsInformationURL(header.name), {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
              "x-rapidapi-key": isUserAuthenticated.rk
          }
      })
        const airports = await data.json();
        setAirports(airports);
        setIsAirportsFetch(true);       
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        
            
        } catch (error) {
            setIsError(true)
        }
        setIsLoading(false)
        scrollToSection("airports")
    }
    

    const  scrollToSection = (ident) => {
        scroller.scrollTo(ident, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };   
    
    
    return(
        <div className = "cityContainer">     
             <header className="header" id="header-life" >
                <div id="message"></div>        
                 <SelectForm />          
            </header>                
            <div >
            {isError && <div className = "error">Error. Something went wrong...</div>}
            
            { !city ? <h2>Please select a city...</h2> : isLoading
            ?    <div className = "loader">
                <Loader type="Grid"
                    color="#00BFFF"
                    height={40}
                    width={40} 
                />
                </div>
            :
                <div>
                {isFetch && 
                    <div className = "wrapper" >
                        <h3>Life in different countries....</h3>
                            <SectionFirst 
                            info = {figureProps(fetchRestaurantInformation, getHotelsInformation, getAttractionsInformation, fetchAirportsInformation)} 
                            position = {position}/>
                        <div >                      
                            <CityInfo header = {header}/>
                        </div>                      
                    </div>  
                    }  
                </div>
            }          
            {isRestaurantsFetch &&   
                <div className = "wrapper">         
                    <Restaurants restaurants = {restaurants} />
                </div>
            }            
            {isHotelsFetch &&
                <div className = "wrapper">  
                    <Hotels hotels = {hotels} />
                </div>
            }
            {isAttractionsFetch &&
                <div className = "wrapper">  
                    <Attractions attractions = {attractions} />
                </div>
            }
            {isAirportsFetch &&
                <div className = "wrapper">  
                    <Airports airports = {airports}/> 
                </div>               
            }              
            </div>
            <figure 
                className = "top" 
                onClick = {() => {scrollToSection("section-first")}}
            >
            <img src = {arrowUp} alt = "arrow up"  />
            </figure>        
        </div>    
    )
}

export default City;