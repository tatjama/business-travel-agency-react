import { useState } from 'react';
//context
import { useAppContext } from '../libs/contextLib';
//utils 
import { getRestaurantInformationURL, header } from '../utils/constants';

const useFetchRestaurants = ( setError, setIsLoading, callback) => {
    const { isUserAuthenticated } = useAppContext();
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurantInformation = async(locationId) =>{
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch(getRestaurantInformationURL(locationId), 
            header(process.env.REACT_APP_RAPID_API_HOST, isUserAuthenticated.rk));
            const data = await response.json();    
            if(response.status === 200){
                setRestaurants(data.data.filter(restaurant => restaurant.location_id !== "294472" && restaurant.photo))   
            }else {
                setError(data.error);
            }
            
            callback()
            
            } catch (error) {
                setError(error)
            }

        setIsLoading(false)
    }
    return { restaurants, fetchRestaurantInformation }
}

export default useFetchRestaurants;