import React from "react";
import astronaut from '../images/astronaut.webp';
import breakfast from '../images/breakfast.webp';
import friends from '../images/friends.webp';
import world from '../images/world.webp';
import airplane from '../images/airplane.webp';
import airSerbiaLogo from '../images/logoavio1.webp';
import avatar from '../images/traveler.webp';
import SelectForm from "../components/SelectForm";
import Figure from '../components/Figure';
import RangeDiv from '../components//RangeDiv';
import Comment from '../components/Comment';


const Life = ()=>{

    const userCommentEl = document.getElementById('user-comment');
        const transportEl = document.getElementById('transport');
        const foodEl = document.getElementById('food');
        const safetyEl = document.getElementById('safety');
        const cultureEl = document.getElementById('culture');
        const airportEl = document.getElementById('airport');

        function showAddComment() {
            userCommentEl.style.display = "block";
        }
        function closeAddComment() {
            userCommentEl.style.display = "none";
        }
        function showLocalTransport() {
            transportEl.style.display = "block";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showFood() {
            transportEl.style.display = "none";
            foodEl.style.display = "block";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showSafety() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "block";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showLocalCulture() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "block";
            airportEl.style.display = "none";
        }
        function showAirport() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "block";
        }

    return(
        <div className="page-life">
             <header className="header" id="header-life" >
                <div id="message"></div>        
                 <SelectForm/>          
            </header>

    
            <div className="wrapper">
                <h3>Life in different countries....(Country-City)</h3>
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
                <section className="section-second">
                    <div  id="transport" >
                        <h1>Local Transport</h1>
                        General Information about Local transport:
                        <ul>
                            <li>Train</li>
                            <li>Rent a car</li>
                            <li>BUS</li>
                            <li>Taxi</li>
                        </ul>
                        <button id="showAdd" onClick = {showAddComment}>Add comment</button>
        
                        <div id="user-comment" >
                            <h1>Add feedback about Local transport</h1>
                            <p>or Add feedback about hotels, restaurants, cities...</p>
                            <div className="middle-wrapper">
                                <div className="user-comment">
                                    <form>
                                        <div className = "provider">
                                            <img className = "provider-logo" src = {airSerbiaLogo} alt = "Air Serbia Logo"/>
                                            <h2>Add feedback about AirSerbia</h2>
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
                                        <button type="submit">Add feedback</button>
                                        <button id="close" onClick ={closeAddComment}>Close</button>    
                                    </form>
                        </div>
                    </div>
                </div>

                <div>
                    <form>
                        <h2>Show Comments:</h2>
                       <Comment 
                            id = "comment1" 
                            source = {avatar} 
                            userName = " Pera Peric"
                            date = "01.01.2013"
                            commentTitle = "I like this city"
                            commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                        />
                       <Comment 
                            id = "comment2" 
                            source = {avatar} 
                            userName = " Dusko Dugousko"
                            date = "02.02.2019"
                            commentTitle = "Airplane is quite old..."
                            commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                        />
                       <Comment 
                            id = "comment3" 
                            source = {avatar} 
                            userName = " Marko Markovic"
                            date = "03.03.2003"
                            commentTitle = "About a place"
                            commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat iverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet faucib maximus. Proin non nulla lectus."
                        />
                        
                        <button  >Delete comment</button>
                    </form>
                </div>
            </div>
            <div  id="food">
                <h1>Food & Entertainment</h1>
                General Information about Local Food & Entertainment:
                <ul>
                    <li>Restaurants</li>
                    <li>Fast food</li>
                    <li>Cafe</li>
                    <li>Clubs</li>
                </ul>
            </div>
            <div id="safety">
                <h1>Safety</h1>
                General Information about Local Safety:
                <ul>
                    <li>Regulations</li>
                    <li>Police</li>
                    <li>Hospitals</li>
                    <li>Hospitality</li>
                </ul>
            </div>
            <div  id="culture">
                <h1>Local Culture</h1>
                General Information about Local Culture:
                <ul>
                    <li>Museums</li>
                    <li>Opera</li>
                    <li>Music</li>
                    <li>Dance</li>
                </ul>
            </div>
            <div  id="airport">
                <h1>Airport</h1>
                General Information about Airport:
                <ul>
                    <li>Airport1</li>
                    <li>Airport2</li>
                    <li>Transport from /to airport</li>
                </ul>
            </div>
        </section>
    </div>

        </div>
    )
}

export default Life;