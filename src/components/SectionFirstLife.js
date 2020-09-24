import React from 'react';
import Figure from './Figure';


class SectionFirstLife extends React.Component{
    constructor(props){
        super();
        
    
    const showLocalTransport = () => {
        document.getElementById('transport').style.display = "block";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
    const showFood = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "block";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
    const showSafety = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "block";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "none";
    }
    const showLocalCulture = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "block";
        document.getElementById('airport').style.display = "none";
    }
    const showAirport = () => {
        document.getElementById('transport').style.display = "none";
        document.getElementById('food').style.display = "none";
        document.getElementById('safety').style.display = "none";
        document.getElementById('culture').style.display = "none";
        document.getElementById('airport').style.display = "block";
    }
}
    render(){
        
        return(
            <section className="section-first">
                {console.log(this.props.info)}
                {this.props.info.map((figure) =>{
                    return(
                        <Figure 
                        name = {figure.name} 
                        source = {figure.source} 
                        handleOnClick = {figure.handleOnClick} 
                        alt = {figure.alt} 
                        go  = {figure.go}
                        key = {figure.name}
                    />
                    )}
                )}
                    
                    
                </section>

        )
    }
}

export default SectionFirstLife;