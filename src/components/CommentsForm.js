import React from 'react';
import Comment from './Comment';
import avatar from '../images/traveler.webp';
import avatarMarko from '../images/avatar-marko.webp';
import avatarJelena from '../images/avatar-jelena.webp';

const CommentsForm =()=>{    
    const comments = [
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
                
                <Comment 
                        id = {comments[0].id} 
                        source = {comments[0].source} 
                        userName = {comments[0].userName}
                        date = {comments[0].date}
                        commentTitle = {comments[0].commentTitle}
                        commentText = {comments[0].commentTitle}
                />
                <Comment 
                        id = {comments[1].id} 
                        source = {comments[1].source} 
                        userName = {comments[1].userName}
                        date = {comments[1].date}
                        commentTitle = {comments[1].commentTitle}
                        commentText = {comments[1].commentTitle}/>
                <Comment 
                        id = {comments[2].id} 
                        source = {comments[2].source} 
                        userName = {comments[2].userName}
                        date = {comments[2].date}
                        commentTitle = {comments[2].commentTitle}
                        commentText = {comments[2].commentTitle}
                         />
                    
                <button  >Delete comment</button>
            </form>
        </div>
        )
    }


export default CommentsForm;