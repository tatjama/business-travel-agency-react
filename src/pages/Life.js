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
//import RangeDiv from '../components//RangeDiv';
import Comment from '../components/Comment';
import GeneralInformation from "../components/GeneralInformation";
import UserComment from "../components/UserComment";


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
                <GeneralInformation
                            id = "transport"
                            informationTitle = "Local Transport"
                            informationSubtitle = "General Information about Local Transport:"
                            li1 = "Train"
                            li2 = "Rent a car"
                            li3 = "BUS"
                            li4 = "Taxi"
                            buttonId = "show-add-comment-transport"
                            handleOnClick = {showAddComment}                            
                />                  
                    
                        <div id="user-comment" >
                            <h1>Add feedback about Local transport</h1>
                            <p>or Add feedback about hotels, restaurants, cities...</p>
                            <div className="middle-wrapper">
                                <UserComment
                                    source = {airSerbiaLogo}
                                    nameProvider = "Air Serbia"
                                    handleOnClick = {closeAddComment}
                                />                                
                            </div>
                        </div>  
                        <div>
                            <form>
                                <h2>Show Comments:</h2>
                                <React.Fragment>
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
                                </React.Fragment>    
                                <button  >Delete comment</button>
                            </form>
                        </div>
                    
                    
                    <GeneralInformation 
                            id = "food" 
                            informationTitle = "Food & Entertainment"
                            informationSubtitle = "General Information about Local Food & Entertainment:"
                            li1 = "Restaurants"
                            li2 = "Fast food"
                            li3 = "Cafe"
                            li4 = "Clubs"
                            buttonId = "show-add-comment-food"
                            handleOnClick = {showAddComment}
                    />
                    
                    <GeneralInformation 
                            id = "safety" 
                            informationTitle = "Local safety"
                            informationSubtitle = "General Information about Local Safety:"
                            li1 = "Regulations"
                            li2 = "Police"
                            li3 = "Hospitals"
                            li4 = "Hospitality"
                            buttonId = "show-add-comment-safety"
                            handleOnClick = {showAddComment}
                    />
                    
                    <GeneralInformation 
                            id = "culture" 
                            informationTitle = "Local Culture"
                            informationSubtitle = "General Information about Local Culture:"
                            li1 = "Museums"
                            li2 = "Opera"
                            li3 = "Music"
                            li4 = "Dance"
                            buttonId = "show-add-comment-culture"
                            handleOnClick = {showAddComment}
                    />
                     
                    <GeneralInformation
                            id = "airport"
                            informationTitle = "Airport"
                            informationSubtitle = "General Information about Airport:"
                            li1 = "Airport1"
                            li2 = "Airport2"
                            li3 = "Transport from /to airport"
                            buttonId = "show-add-comment-airport"
                            handleOnClick = {showAddComment}
                            
                    />
        </section>
    </div>

        </div>
    )
}

export default Life;