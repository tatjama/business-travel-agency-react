import React from 'react';

const Attractions  = (props) =>{
    return(
        <div>
        {console.log(props.attractions)}
            <h1>Attractions </h1>
            <div className = "provider-div" id = "attractions">
                {props.attractions.map((attraction) => {
                    return(
                        <div key = {attraction.result_object.location_id} className = "hotels">
                            <h1> {attraction.result_object.name}</h1>
                            <h2>Rating: {attraction.result_object.rating}</h2>
                            <div className = "hotels-info">
                                <div className = "hotels-left">
                                    <img 
                                        src = {attraction.result_object.photo.images.small.url} 
                                        alt = {attraction.result_object.name}
                                    />         
                                </div>   
                                <div className = "hotels-right">              
                                    <p>Address: <span>{attraction.result_object.address}</span></p>                          
                                    <p>ID: <span>{attraction.result_object.location_id}</span></p>
                                    <p>Category: <span>{attraction.result_object.category.name}</span></p>                        
                                    <p>Review snippet: <span>{attraction.review_snippet.snippet}</span></p>
                                    <p>Type: <span>{attraction.result_type}</span></p>
                                </div>
                            </div>
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>   
                        </div>
                     )
                })}
            </div>
        </div>

    )
}

export default Attractions;