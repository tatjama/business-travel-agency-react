import React, {useState, useEffect} from 'react';
import RangeDiv from './RangeDiv';
import adminAvatar from '../images/avatar-ivana.jpg';
import userAvatar from '../images/avatar-dragan.webp';
import tAdminAvatar from '../images/avatar-jelena.webp';
import appAvatar from '../images/travel-and-tourism.png';

const LeaveCommentForm = (props) =>{
    const [avatar, setAvatar] = useState(appAvatar);
    const [published, setPublished] = useState("");
    useEffect(() => {
        setPublished(new Date())
        if(props.user.logInUser.firstName == "Admin"){
            setAvatar(adminAvatar)
        }else if(props.user.logInUser.firstName == "User"){
            setAvatar(userAvatar)
        }else if(props.user.logInUser.firstName = "Tanja"){
            setAvatar(tAdminAvatar)
        }else{
            setAvatar(appAvatar)
        }

       
    }, [avatar])
    return(
        <div className="user-comment">   
        <p>{console.log(props.user)}</p>         
            <form>
                 <div className = "provider">
                     
                     <img className = "provider-logo" src = {props.source} alt = {props.locationName}/>
                      
                    
                         <h2>Add feedback about <br/> {props.locationName}</h2>
                         <p>Location ID: {props.locationId}</p>
                         <p>Type: {props.type}</p>
                            <div>
                                                <span className="heading">User Rating</span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star "></span>
                                                <p>{props.rating} average based on {props.num_reviews} reviews.</p>    
                            </div>
                     
                 </div>
                 <div className = "user">
                     <img className = "avatar" src = {avatar} alt = {props.user.logInUser.firstName}/>
                 <p>Author:
                     <br/><span>{props.user.logInUser.firstName + " " + props.user.logInUser.lastName}</span></p>
               
                </div>
                Header:
                <br/>
                <textarea  rows="1" id="comment-header" placeholder="Try to describe your range"></textarea> 
                <br/> 
                Comment:
                <br/>
                <textarea  rows="10" placeholder="Place for your comment..."></textarea>
                <br/>
                <p className = "message-range">Click for range</p>
                <RangeDiv/>
                <br/>
                <button type="submit">Submit</button>
                <button onClick ={props.handleOnClick}>Close</button>    
            </form>
        </div>
    )
}

export default LeaveCommentForm;