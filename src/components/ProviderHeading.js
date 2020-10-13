import React, {useState, useEffect} from 'react';

const ProviderHeading = (props) =>{
   
    return(
        <div className="provider-heading ">
            <div className="left">
                <img className="provider-logo " src={props.logo} alt = {props.info.name}/>
                
            </div>
            <div className="right">
                <p>Provider name:<span> {props.info.name}</span></p>                                    
                <p>Type: <span>{props.info.type}</span></p>
                <br/>
                <span className="heading ">User Rating</span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star checked "></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star "></span>
                <p>{props.info.rating} average based on {props.info.num_review} reviews.</p>
                
            </div>
            
        </div>
    )
}

export default ProviderHeading;