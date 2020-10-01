import React, {useState} from 'react';
import SelectForm from '../components/SelectForm';
import SectionFirstFeedback from '../components/SectionFirstFeedback';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import CommentFromUsers from '../components/CommentFromUsers';

const Feedbacks = ()=>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated);
    const [comments, setComments] = useState([]);    
    const [id, setId] = useState(null);
    const rapidKey = "e972fb1e60msh0d592a9ef4ed992p1e0e2bjsne8349b28c470"

    const fetchRestaurantComments = async () => {
       // setId(props.restaurants.location_id)
       // console.log(id)
       let commentArray = []
        const data = await
        fetch(`https://tripadvisor1.p.rapidapi.com/reviews/list?limit=20&currency=USD&lang=en_US&location_id=3729577`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		        "x-rapidapi-key": rapidKey
	    }
    })
    const comments = await data.json();
    await setComments(comments.data);
    console.log(comments);    
    commentArray  = JSON.parse(localStorage.getItem("fetchComment")) || [];
    commentArray.push(comments);
    localStorage.setItem("fetchComment", JSON.stringify(commentArray))
 }
    
    return(
        <div className="page-feedback">
            <header className="header" id="header-feedback">
                <div id="message" style={{"color": "rgb(29, 150, 187)"}}></div>
                <SelectForm/>
            </header>
    <div className="wrapper" >
        <h3>Feedback</h3>
            <SectionFirstFeedback/>
            <div >                                 
                <Button 
                    name = "See Comments"
                    handleOnClick = {fetchRestaurantComments} 
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
                    <p>
                        Lorem ipsum dolor sit amet, fugit velit theophrastus sit ne, eros feugait no ius. Dicant tincidunt cum et, iuvaret nominati quaestio ei qui. Laoreet concludaturque eam no, illud deseruisse est te. Inani dolorum est et, eirmod euismod oporteat cu pri.
                        Erant sonet eruditi at quo, minim lucilius ei vix. Sed soluta euismod ei. Ad alia adipisci sed. Mea ea zril facilisis. Pro decore nominati ad, no dictas alterum eam. Et usu ancillae salutandi, in eos hinc doming. Agam deterruisset
                        eum te, assentior complectitur eu his. Tation oporteat et qui. Quidam blandit eu vim, laudem equidem theophrastus et vim. Feugiat graecis dissentiet an pri, has an utroque legendos. Commodo alterum suscipit mei ei. Duo vitae scaevola
                        in, usu falli viderer in. Mea eu duis vidit repudiare, ut has putant mollis rationibus. Sit alia homero quaeque et, usu erroribus accusamus te, ea vix fastidii accusata maiestatis. Ex usu verterem comprehensam. Soleat aliquam ex
                        pro, fuisset facilisis repudiare ea pro. Ceteros intellegam in sed, pri tempor placerat ea, ne est verear scripta. Nec in odio partem repudiandae, vix omnesque quaestio liberavisse ad, sumo decore eu cum. Mea eu mucius insolens,
                        ei erant accumsan consequat est. Ut vis solet detracto appellantur. Eu inani errem ludus sit, vim convenire argumentum id, ne exerci laoreet vituperatoribus eos. Ut eam quando ceteros. Quo ut partiendo vituperata.
                    </p>
                </section>        
    </div>


        </div>
    )
}

export default Feedbacks;
{/**
     <div key = {comment.id} >
                                        <h1>Title: {comment.title}</h1>
                                        <h2>User:{comment.user.username}</h2>
                                        <img src = {comment.user.contributions.avatar_url} alt = {comment.user.username}/>
                                        <img src = {comment.user.avatar.small.url} alt = {comment.title}/>
                                        <p>{comment.created_time}</p>
                                        <p>{comment.text}</p>
                                        <p>ID: {comment.id}</p>
                                        <p>Published: {comment.published_date}</p>
                                        <p>Rating: {comment.rating}</p>
                                        <p>{comment.type}</p>
                                        <p>Date: {comment.travel_date}</p>
                                    </div>
 */}