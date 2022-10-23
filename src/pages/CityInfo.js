import React from 'react';

const CityInfo = (props) =>{
    return(
        <div>  
            City:  
            <h1 className = "main-header">{props.header.name} </h1>                 
            <div className = "main-div">                              
                 <div className="data-info">
                    <div className="data-left ">
                        <h2>INFO</h2>
                        <p>City name:<span>{props.header.name}</span></p>
                        <p>Time zone: <span>{props.header.timezone}</span></p>
                        <p>Longitude: <span>{props.header.longitude}</span></p>
                        <p>Latitude: <span>{props.header.latitude}</span></p>
                        <p>ID: <span>{props.header.location_id}</span></p> 
                    </div>                    
                    
                    <div className="data-img">
                        <img src={props.header.photo.images.medium.url} alt={props.header.name} />
                    </div>
                    <div className="data-left">
                        <p>Restaurants: <span>{props.header.category_counts.restaurants.total}</span></p>                        
                        <p>Hotels: <span>{props.header.category_counts.accommodations.hotels}</span></p>
                        <p>Inns: <span>{props.header.category_counts.accommodations.bbs_inns}</span></p>
                        <p>Others accommodations: <span>{props.header.category_counts.accommodations.others}</span></p>
                        <p>Attractions: <span>{props.header.category_counts.attractions.attractions}</span></p>
                        <p>Activities: <span>{props.header.category_counts.attractions.activities}</span></p>
                        <p>Night life: <span>{props.header.category_counts.attractions.nightlife}</span></p>
                        <p>Shopping: <span>{props.header.category_counts.attractions.shopping}</span></p> 
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

