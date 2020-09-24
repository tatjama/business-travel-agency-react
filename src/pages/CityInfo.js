import React from 'react';
import logoAirplane from '../images/logoavio1.webp';

const CityInfo = (props) =>{
    return(
        <div>
             <div className="wrapper">
                <div id="showTransportation">
                    <h1>City name:{props.header.name}</h1>
                    <div className="middle-wrapper ">
                        <div className="provider-div ">
                        <div className="provider-heading ">
                            <div className="left">
                                <img className="provider-logo " src={logoAirplane} alt = "Air Serbia logo"/>
                                <h2>City name: {props.header.name}
                                                    <br/>
                                Type: City
                                </h2>
                            </div>
                            <div className="right">
                                <span className="heading ">User Rating</span>
                                <span className="fa fa-star checked "></span>
                                <span className="fa fa-star checked "></span>
                                <span className="fa fa-star checked "></span>
                                <span className="fa fa-star "></span>
                                <span className="fa fa-star "></span>
                                <p>4.1 average based on 254 reviews.</p>
                            </div>
                        </div>
                            <div className="show-provider-detail " id="showProviderDetail ">
                                <hr style={{"border":"3px solid #f1f1f1 "}}/>
                                <div className="provider-detail " id="providerDetail">
                                    <div className="left ">
                                        <p>Name: {props.header.name}</p>
                                        <p>Country: Serbia</p>
                                        <p>LONGITUDE: {props.header.longitude}</p>
                                        <p>LATITUDE: {props.header.latitude}</p>
                                        <p>ID: {props.header.location_id}</p>
                                        <p>Contact:</p>
                                    </div>
                                    <div className="right ">
                                        <h3>DESCRIPTION</h3>
                                        <p>{props.header.geo_description}</p>            
                                    </div>
                                </div>
                            </div>
                        </div>
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