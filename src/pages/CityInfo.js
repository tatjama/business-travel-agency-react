import React from 'react';
//import logoAirplane from '../images/logoavio1.webp';

const CityInfo = (props) =>{
    return(
        <div>
            {console.log(props.header)}    
            <h1 className = "main-header">{props.header.name} </h1>                 
            <div className = "main-div">                              
                 <div className="data-info">
                    <div className="data-left ">
                        <h2>INFO</h2>
                        <p>CITY NAME:<span>{props.header.name}</span></p>
                        <p>TIME ZONE: <span>{props.header.timezone}</span></p>
                        <p>LONGITUDE: <span>{props.header.longitude}</span></p>
                        <p>LATITUDE: <span>{props.header.latitude}</span></p>
                        <p>ID: <span>{props.header.location_id}</span></p>                                                                
                    </div>
                    <div className="data-right ">
                    <h2>DESCRIPTION</h2>
                        {props.header.geo_description?
                         <p><span>{props.header.geo_description}</span></p> 
                         : <p><span>Description is not available</span></p>           
                        }
                        
                    </div>
                </div>  
            </div>             
        </div>
    )
}

export default CityInfo;

/**
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
             */