import React from 'react';
import Rating from './Rating';

const CommentFromUsers = (props) =>{
    return(
        <div className="comment" id= {props.comment.id}>       
        <div className="user">
            <img className="avatar" src = {props.comment.user.avatar.small.url} alt= {props.comment.user.username}/>
            <p>Author: {props.comment.user.username}</p>
            <p>Date: {props.comment.published_date}</p>
        </div>
        <div className="text-comment">
            <h2> {props.comment.title}</h2>            
            <p>Comment: {props.comment.text}</p>
            <p>Travel date: {props.comment.travel_date}</p>
        </div>
        <div className="range">
            <div>
                <span className="heading">User Rating: {props.comment.rating} </span>
                <Rating rate = {parseInt(props.comment.rating)}/>
               
            </div>
            <br/><br/>
            <input type="checkbox"/> 
            <span>Choose comment</span>
        </div>
    </div>
    )
}

export default CommentFromUsers;