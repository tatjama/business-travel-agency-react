import React from 'react';
import RangeDiv from './RangeDiv';

const LeaveCommentForm = (props) =>{
    return(
        <div className="user-comment">            
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
                                                <p>4.1 average based on 254 reviews.</p>    
                            </div>
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
                <button id="close" onClick ={props.handleOnClick}>Close</button>    
            </form>
        </div>
    )
}

export default LeaveCommentForm;