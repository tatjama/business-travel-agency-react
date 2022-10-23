//assets
import breakfast from '../images/breakfast.png';
import hotel from '../images/hotel.png';
import world from '../images/world.png';
import airplane from '../images/airplane.png';

export const getCountriesURL = () => `${process.env.REACT_APP_RAPID_API_BASE_URL_COUNTRIES_CITIES}
/location/country/list`;

export const getCitiesURL = (id) => id === 'US'|| id === 'RU' || id === 'IN' || id === 'CN' 
 ? `${process.env.REACT_APP_RAPID_API_BASE_URL_COUNTRIES_CITIES}/location/country/${id}/city/list?page=1&per_page=100&format=json&population=250001`
 :`${process.env.REACT_APP_RAPID_API_BASE_URL_COUNTRIES_CITIES}/location/country/${id}/city/list?page=1&per_page=100&format=json&population=50001`;

export const getCommentsURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/reviews/list?limit=20&currency=USD&lang=en_US&location_id=${id}`;

export const getCityInformationURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${id}`

export const getRestaurantInformationURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=${id}`

export const getAirportsInformationURL = (name) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/airports/search?locale=en_US&query=${name}`;

export const header = (host, key) => ({
    "method": "GET",
    "headers": {
        "x-rapidapi-host": host,
        "x-rapidapi-key": key
    }
})  
        
export const figureProps = (fetchRestaurantInformation, 
                            renderHotelsInformation, 
                            renderAttractionsInformation, 
                            fetchAirportsInformation) =>  [
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
        handleOnClick: renderHotelsInformation,
        alt: "friends hands" ,
        go: "#safety"
    },
    {
        name: "Attractions" ,
        source: world, 
        handleOnClick: renderAttractionsInformation,
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