import React from 'react';
import Figure from './Figure';
import astronaut from '../images/astronaut.webp';
import breakfast from '../images/breakfast.webp';
import friends from '../images/friends.webp';
import world from '../images/world.webp';
import airplane from '../images/airplane.webp';


class SectionFirst extends React.Component{
    
    render(){
        function showLocalTransport() {
            document.getElementById('transport').style.display = "block";
            document.getElementById('food').style.display = "none";
            document.getElementById('safety').style.display = "none";
            document.getElementById('culture').style.display = "none";
            document.getElementById('airport').style.display = "none";
        }
        function showFood() {
            document.getElementById('transport').style.display = "none";
            document.getElementById('food').style.display = "block";
            document.getElementById('safety').style.display = "none";
            document.getElementById('culture').style.display = "none";
            document.getElementById('airport').style.display = "none";
        }
        function showSafety() {
            document.getElementById('transport').style.display = "none";
            document.getElementById('food').style.display = "none";
            document.getElementById('safety').style.display = "block";
            document.getElementById('culture').style.display = "none";
            document.getElementById('airport').style.display = "none";
        }
        function showLocalCulture() {
            document.getElementById('transport').style.display = "none";
            document.getElementById('food').style.display = "none";
            document.getElementById('safety').style.display = "none";
            document.getElementById('culture').style.display = "block";
            document.getElementById('airport').style.display = "none";
        }
        function showAirport() {
            document.getElementById('transport').style.display = "none";
            document.getElementById('food').style.display = "none";
            document.getElementById('safety').style.display = "none";
            document.getElementById('culture').style.display = "none";
            document.getElementById('airport').style.display = "block";
        }
    
        return(
            <section className="section-first">
                    <Figure 
                        name = "Local transport" 
                        source = {astronaut} 
                        handleOnClick = {showLocalTransport} 
                        alt = "space astronaut" 
                        go  = "#transport"
                    />
                    <Figure 
                        name = "Food & Entertainment" 
                        source = {breakfast} 
                        handleOnClick = {showFood}
                        alt = "breakfast" 
                        go  = "#food"
                    />
                    <Figure 
                        name = "Safety" 
                        source = {friends} 
                        handleOnClick = {showSafety}
                        alt = "friends hands" 
                        go  = "#safety"
                    />
                    <Figure 
                        name = "Local culture" 
                        source = {world} 
                        handleOnClick = {showLocalCulture}
                        alt = "world" 
                        go  = "#culture"
                    />
                    <Figure 
                        name = "Airport" 
                        source = {airplane} 
                        handleOnClick = {showAirport}
                        alt = "airplane" 
                        go  = "#airport"
                    />
                </section>

        )
    }
}

export default SectionFirst;