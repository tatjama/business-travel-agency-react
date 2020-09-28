import React from 'react';

const Airports = (props) =>{
    return(
        <div >                    
                    {console.log(props.airports)}
            <h1 className = "main-header">AIRPORTS </h1>
            <div className = "main-div" id = "airports">            
                {props.airports.map((airport) => {
                    return(
                        <div key = {airport.country_code} className = "data-selected">
                            <h1>{airport.display_name}</h1>
                            <h2>Code: {airport.code}</h2>
                            <div className = "data-info">
                                <div className = "data-left">
                                    <p>Name: <span>{airport.name}</span></p>
                                    <p>Code: <span>{airport.code}</span></p>
                                    <p>Display name: <span>{airport.display_name}</span></p>
                                </div>
                                <div className = "data-right">
                                    <p>City name: <span>{airport.time_zone_name}</span></p>                        
                                    <p>Country: <span>{airport.country_code}</span></p>                        
                                </div>  
                            </div>
                            
                        </div>
                        )
                    })}
            </div>    
        </div>
    )
}

export default Airports;