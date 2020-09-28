import React from 'react';
import avatarImage from '../images/travel-and-tourism.png';

const Hotels = (props) =>{
    return(
        <div>
                    {console.log(props.hotels)}
                    <h1>Hotels </h1>
                    <div className = "provider-div" id = "hotels">
                    {props.hotels.map((item) => {
                  return(                      
                      <div key = {item.result_object.location_id} className = "hotels">
                                                    
                          <h1> {item.result_object.name}</h1>
                          <h2>Rating: {item.result_object.rating}</h2>
                          <div className = "hotels-info">  
                            <div className = "hotels-left">
                                {item.result_object.photo.images.small.url?
                                <img 
                                    src = {item.result_object.photo.images.small.url} 
                                    alt = {item.result_object.name}
                                />:
                                <img
                                    src = {avatarImage}
                                    alt = "generic"
                                    style = {{ height: "150px"}}
                                />
                            }
                                </div> 
                            <div className = "hotels-right"> 
                                <p>Address: <span>{item.result_object.address}</span></p>
                                <p>ID: <span>{item.result_object.location_id}</span></p>
                                <p>Category: <span>{item.result_object.category.name}</span></p>
                                
                                <p>Review snippet: <span>{item.review_snippet.snippet}</span></p>
                                <p>Type: <span>{item.result_type}</span></p>    
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

export default Hotels;