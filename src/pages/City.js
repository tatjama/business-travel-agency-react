import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import Loader from 'react-loader-spinner';
//components
import SelectForm from '../components/SelectForm';
import SectionFirst from '../components/SectionFirst';
//context
import { useAppContext } from '../libs/contextLib';
//hooks
import useFetchCity from '../hooks/useFetchCity';
import useFetchAirports from '../hooks/useFetchAirports';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
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
import { figureProps } from '../utils/constants';

const City =({match}) =>{   
    
    const [city, setCity] = useState(null);
    const [header, setHeader] = useState([])  
    const [isFetch, setIsFetch] = useState(false);
    const [isRestaurantsFetch, setIsRestaurantsFetch] = useState(false)
    const [isHotelsFetch, setIsHotelsFetch] = useState(false)
    const [hotels, setHotels] = useState([])
    const [isAttractionsFetch, setIsAttractionsFetch] = useState(false)
    const [attractions, setAttractions] = useState([])    
    const [isAirportsFetch, setIsAirportsFetch] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
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

    const renderCity = () => {
        setIsFetch(true)
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);
        scrollToSection("wrapper")
    }
    
    const renderRestaurants = () => {
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(true);
        scrollToSection("wrapper");        
    }
    const renderAirports = () => {
        setIsAirportsFetch(true);       
        setIsAttractionsFetch(false);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);    
        scrollToSection("wrapper");            
    }   
    
    const renderHotelsInformation = () =>{        
        setIsAirportsFetch(false);
        setIsAttractionsFetch(false);
        setIsHotelsFetch(true);
        setIsRestaurantsFetch(false);
        scrollToSection("wrapper");
      }

    const renderAttractionsInformation = () =>{   
        setIsAirportsFetch(false);
        setIsAttractionsFetch(true);
        setIsHotelsFetch(false);
        setIsRestaurantsFetch(false);            
        scrollToSection("wrapper")
      }
      
    const { info, fetchCityInformation } = useFetchCity( setError, setIsLoading, renderCity );
    const { restaurants, fetchRestaurantInformation } = useFetchRestaurants( setError, setIsLoading, renderRestaurants );
    const { airports, fetchAirportsInformation } = useFetchAirports( setError, setIsLoading, renderAirports)
    

    useEffect(() => {
       info && setHeader(info[0].result_object)
   
       info &&  setHotels(info.filter((hotel) => {
                   return(
                       hotel.result_type === "lodging"
                       && hotel.result_object.photo //if hotel image does not exist filter hotels
                       && hotel.review_snippet
                   )}
               ))
        info &&  setAttractions(info.filter((attraction) =>{
                   return(
                     attraction.result_type === "things_to_do" 
                     && attraction.result_object.photo
                     && attraction.review_snippet// if review snippet does not exist                  
                   )}
               ))
    }, [info]);

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
            {error && <div className = "error">Error. Something went wrong...</div>}
            
            { !city ? <h2>Please select a city...</h2> : isLoading
            ?    <div className = "loader">
                <Loader type="Grid"
                    color="#00BFFF"
                    height={40}
                    width={40} 
                />
                </div>
            :   <div className = "wrapper" >                    
                {isFetch &&<> 
                        <h3>Life in different countries....</h3>
                            <SectionFirst 
                            info = {figureProps(
                                    () => fetchRestaurantInformation(header.location_id), 
                                    renderHotelsInformation, 
                                    renderAttractionsInformation, 
                                    () => fetchAirportsInformation(header.name))} 
                            position = {position}/>
                        <div >                      
                            <CityInfo header = {header}/>
                        </div>                      
                    </>}
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