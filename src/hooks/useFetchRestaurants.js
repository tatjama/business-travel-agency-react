import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getRestaurantInformationURL } from '../utils/constants';

const useFetchRestaurants = ( setError, setIsLoading, callback) => {
    const { isUserAuthenticated } = useAppContext();
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurantInformation = async(locationId) =>{
        setError(null)
        setIsLoading(true)
        try {
            const data = await
        fetch(getRestaurantInformationURL(locationId),{
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
        callback()
            
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
    }
    return { restaurants, fetchRestaurantInformation }
}

export default useFetchRestaurants;