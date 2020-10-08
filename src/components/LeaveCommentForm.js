import React, {useState, useEffect} from 'react';
import RangeDiv from './RangeDiv';
import adminAvatar from '../images/avatar-ivana.jpg';
import userAvatar from '../images/avatar-dragan.webp';
import tAdminAvatar from '../images/avatar-jelena.webp';
import appAvatar from '../images/travel-and-tourism.png';
import Rating from './Rating';
const initialCommentValues = {
    comment:{
        id: null,
        published_date: "",
        rating: null,
        text: "",
        title: "",
        travel_date: "",
        user: {
            username: "",
            avatar: {small:{
                url: appAvatar
            }}
        }
    }
}
const initialValues = {    
        travel_date: "",
        rating: "",
        text: "",
        title: ""    
}

const LeaveCommentForm = (props) =>{
    const [avatar, setAvatar] = useState(appAvatar);
    const [values, setValues] = useState(initialValues);
    const [commentValues, setCommentValues] = useState(initialCommentValues);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsSubmitted(false)
        const newValues = {...values, [name]: value}
        setValues(values => newValues)
        console.log(values)
    }
    useEffect(() => {
       // setPublished(new Date())       
       switch (props.user.logInUser.firstName) {
           case "Admin":
               setAvatar(adminAvatar)
               break;
            case "User":
                setAvatar(userAvatar)
                break;
            case "Tanja":
                setAvatar(tAdminAvatar)
                break;              
           default:
               setAvatar(appAvatar)
               break;
       }
    }, [avatar])
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const d = new Date();
        const newId = Math.floor((Math.random()*100000000000) + 10000000)  + "user"
        const newValues = {...values, published_date: d, id: newId,  
                            user: {username: props.user.logInUser.firstName,
                                    avatar: {small: {url: avatar}}
            }}
        const newCommentValues = {comment:newValues}
        setCommentValues(newCommentValues)
    }
    useEffect(() => {
        let commentsArray = []
        commentsArray =JSON.parse(localStorage.getItem('commentsArray')) || []
         commentsArray.push(commentValues)
        
        isSubmitted &&
        //console.log(commentValues)
        
         
        localStorage.setItem('commentsArray', JSON.stringify(commentsArray))
        setValues(initialValues)
        
    }, [isSubmitted])
    return(
        <div className="user-comment">   
        <p>{console.log(props.user)}</p>         
            <form id = "leave-comment-form" onSubmit = {handleSubmit}>
                 <div className = "provider">                     
                     <img className = "provider-logo" src = {props.source} alt = {props.locationName}/>                    
                    
                         <h2>Add feedback about <br/> {props.locationName}</h2>
                         <p>Location ID: {props.locationId}</p>
                         <p>Type: {props.type}</p>
                            <div>
                                <Rating rate = {props.rating}/>
                                 <p>{props.rating} average based on {props.num_reviews} reviews.</p>    
                            </div>
                     
                 </div>
                 <div className = "user">
                     <img className = "avatar" src = {avatar} alt = {props.user.logInUser.firstName}/>
                 <p>Author:
                     <br/><span>{props.user.logInUser.firstName + " " + props.user.logInUser.lastName}</span></p>
               
                </div>
                Travel date:
                <input 
                    type = "date" 
                    name = "travel_date"
                    onChange = {handleChange}
                    value = {values.travel_date}
                    required = {true}
                    autoFocus
                />
                Header:
                <br/>
                <textarea  
                    rows="1" 
                    name = "title" 
                    id="comment-header" 
                    placeholder="Try to describe your range"
                    onChange = {handleChange}
                    value = {values.title}
                    required = {true}
                >                    
                </textarea> 
                <br/> 
                Comment:
                <br/>
                <textarea  
                    rows="10" 
                    name = "text" 
                    placeholder="Place for your comment..."
                    onChange = {handleChange}
                    value = {values.text}
                    required = {true}
                >
                </textarea>
                <br/>
                <p className = "message-range">Click for range</p>
                <div>
            <div className = "range">
                                            5 star 
                                            <input 
                                                type="radio" 
                                                name="rating" 
                                                value="5"
                                                
                                                onChange = {handleChange}
                                            />
                                            <span className="fa fa-star checked" checked></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        
                                        </div>
                                        <div className="range">
                                            <label>4 star </label>
                                            <input 
                                                type="radio" 
                                                name="rating" 
                                                value="4"
                                                
                                                onChange = {handleChange}
                                                />
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                        
                                        </div>
                                        <div className="range">
                                            <span>3 star </span>
                                            <input 
                                                type="radio" 
                                                name="rating" 
                                                value="3"
                                                
                                                onChange = {handleChange}
                                                />
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                            
                                        </div>
                                        <div className = "range">
                                            2 star 
                                            <input 
                                                type="radio" 
                                                name="rating" 
                                                value="2"
                                                
                                                onChange = {handleChange}
                                                />
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>                                     
                                        </div>
                                        <div className = "range">
                                            1 star 
                                            <input 
                                                type="radio" 
                                                name="rating" 
                                                value="1"
                                                onChange = {handleChange}
                                                />
                                            <span className="fa fa-star checked"></span>    
                                        </div>
        </div>
                <br/>
                <button type="submit">Submit</button>
                <button onClick ={props.handleOnClick}>Close</button>    
            </form>
        </div>
    )
}

export default LeaveCommentForm;