import React, {useState, useEffect} from 'react';
import logoApp from '../images/travel-and-tourism.png';
import logoAirSerbia from '../images/logoavio1.webp';
import logoAeroflot from '../images/aeroflot.png';
import logoWizz from '../images/wizz.png';



const ProviderHeading = (props) =>{
    const [logo, setLogo] = useState(logoApp)

    useEffect(() => {
        switch(props.info.id){
            case "airserbia": setLogo(logoAirSerbia);
            break;
            case "wizzair": setLogo(logoWizz);
            break;
            case "aeroflot": setLogo(logoAeroflot);
            break;
            default: setLogo(logoApp);
        }
        
    }, [props.info.id])
   
    return(
        <div className="provider-heading ">
            <div className="left">
                <img className="provider-logo " src={logo} alt = {props.info.name}/>
                
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