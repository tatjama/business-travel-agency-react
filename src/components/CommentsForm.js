import React from 'react';
import Comment from './Comment';
import avatar from '../images/traveler.webp';
import avatarMarko from '../images/avatar-marko.webp';
import avatarJelena from '../images/avatar-jelena.webp';



const CommentsForm = () => {  
         const  comments = [
                {
                    id: "comment1" ,
                    source: avatarJelena, 
                    userName: " Pera Peric",
                    date: "01.01.2013",
                    commentTitle: "I like this city",
                    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                
                },
                {
                    id: "comment2" ,
                    source: avatar, 
                    userName: " Dusko Dugousko",
                    date: "02.02.2019",
                    commentTitle: "Airplane is quite old...",
                    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                          
                },
                {
                    id: "comment3" ,
                    source: avatarMarko,
                    userName: " Marko Markovic",
                    date: "03.03.2003",
                    commentTitle: "About a place",
                    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                           
                }
            

            ]     
        
        return(
            <div className = "comments-form">
            <form>
                <h2>Show Comments:</h2>
           {comments.map((comment) => 
               <Comment
               id = {comment.id}
               source = {comment.source}
               userName  = {comment.userName}
               date = {comment.date}
               commentTitle = {comment.commentTitle}
               commentText = {comment.commentText}
               key = {comment.id}
               />
           
           )
           } 
            <button  >Delete comment</button>
        </form>
    </div>
        )
    }  
    
       
    


export default CommentsForm;