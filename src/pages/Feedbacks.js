import React, {useState} from 'react';
import SelectForm from '../components/SelectForm';
import SectionFirst from '../components/SectionFirst';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';
import breakfast from '../images/breakfast.webp';
import hotel from '../images/accomodation.webp';
import world from '../images//world.webp';


const Feedbacks = ()=>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated);
    const [comments, setComments] = useState([]);  
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"

    const fetchComments = async () => {
       // setId(props.restaurants.location_id)
       // console.log(id)
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&lang=
        en_US&location_id=3729577`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": rapidKey
	    }
    })
    const comments = await data.json();
    await setComments(comments.data);
    console.log(comments);       
 }
 const fetchRestaurantInformation = () =>{
     alert("restaurant info")
 }
 const fetchHotelsInformation = () =>{
     alert("hotels info")
 }
 const fetchAttractionsInformation = () =>{
     alert("attractions info")
 }
 const figureProps =  [
    {
        name: "Restaurants", 
        source: breakfast,
        handleOnClick: fetchRestaurantInformation,
        alt: "breakfast" ,
        go: "#food"
    },
    {
        name: "Hotels", 
        source: hotel, 
        handleOnClick: fetchHotelsInformation,
        alt: "friends hands" ,
        go: "#safety"
    },
    {
        name: "Attractions" ,
        source: world, 
        handleOnClick: fetchAttractionsInformation,
        alt: "world" ,
        go: "#culture"
    }]
    
    

    return(
        <div className="page-feedback">
            <header className="header" id="header-feedback">
                <div id="message" style={{"color": "rgb(29, 150, 187)"}}>
                    Add comment {isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}
                </div>
                <SelectForm/>
            </header>
            <div className="wrapper" >
                <h3>Feedback</h3>
                <SectionFirst info = {figureProps}/>
                <div >                                 
                    <Button 
                        name = "See Comments"
                        handleOnClick = {fetchComments} 
                    />          
                    {comments.map((comment) => {
                                return(
                                    <div key = {comment.id}>
                                        <CommentFromUsers comment = {comment}/>
                                   </div>
                                )
                            })}
                </div> 
            <h2>TOP ADVISER </h2>
                <section>
                    
                    
                </section>        
            </div>


        </div>
    )
}

export default Feedbacks;