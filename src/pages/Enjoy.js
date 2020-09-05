import React from 'react';
import logoAirplane from '../images/logoavio1.webp';
import avatar from '../images/traveler.webp';
import RangeDiv from '../components/RangeDiv';

const Enjoy = () =>{
    function showTransportation(){
        alert('show transportation')
    }
    function addInformation() {
        alert('add information')
    }
    function clearSelection() {
        alert("clear selection")
    }
    function showProviderDetail(params) {
        alert("show providers detail")
    }
    function showAddComment(params) {
        alert("show add comment")
    }
    function providerFeedback(params) {
        alert("provider feedback")
    }
    return(
        <div className="page-enjoy">
            <header className="header" id="header-enjoy" >
                <div id="message"></div>
                <h1 id="nCity">Country-City</h1>
            </header>
        
            <div className="wrapper">
                <form id="formTransportation">
                    <fieldset>
                        <legend>Transportation</legend>
                            <div id="transportationFromTo">
                                <div id="from">

                        FROM:
                        <br/>
                         Country: 
                         <input 
                            list="countryFrom" 
                            name="countryFrom" 
                            id="fromCountry" 
                            placeholder="Choose Country FROM" 
                            autoFocus 
                            required
                        />
                        <datalist id="countryFrom">       
                            <option value="Serbia"/>
                            <option value="Greece"/>
                            <option value="Russia"/>
                            <option value="USA"/>
                        </datalist>
                        <br/> <br/> 
                        City :
                        <input 
                            list="cityFrom" 
                            name="cityFrom" 
                            placeholder="City from"/>
                                <br/>
                        <datalist id="cityFrom">
                            <option value="Belgrade"/>
                            <option value="Thessaloniki"/>
                            <option value="Chicago"/>
                            <option value="Moscow"/>
                        </datalist>
                    </div>
                    <div id="to">
                        TO:
                        <br/> 
                        Country:
                        <input 
                            list="countryTo"
                            name="countryTo" 
                            id="toCountry" 
                            placeholder="Choose Country TO" 
                            required
                        />
                        <datalist id="countryTo">       
                                    <option value="Serbia"/>
                                    <option value="Greece"/>
                                    <option value="Russia"/>
                                    <option value="USA"/>
                        </datalist>
                        <br/> <br/> 
                        City :
                        <input list="cityTo" name="cityTo" placeholder="City to"/>
                        <br/>
                        <datalist id="cityTo">
                                    <option value="Belgrade"/>
                                    <option value="Thessaloniki"/>
                                    <option value="Chicago"/>
                                    <option value="Moscow"/>
                        </datalist>
                    </div>

                    <div id="type">
                        Transportation Type
                        <br/> 
                        <input type="radio" name="transportationType" id="airplane"/>
                        <span>Airplane    </span>
                        <br/>                        
                        <input type="radio" name="transportationType" id="bus"/>
                        <span>BUS</span>
                        <br/> 
                        <input type="radio" name="transportationType" id="companyCar"/>
                        <span>Company car    </span>
                        <br/>                        
                        <input type="radio" name="transportationType" id="rentACar"/>
                        <span>Rent a car</span>
                        <br/>
                        <input type="radio" name="transportationType" id="train"/>
                        <span>Train   </span>
                        <br/>                        
                        <input type="radio" name="transportationType" id="taxi"/>
                        <span>Taxi</span>
                    </div>

                    <div>
                        <br/>
                        <br/>
                        <button type="submit" onClick={showTransportation}>
                            <a href="#showTransportation"> Submit</a>
                        </button>
                        <button type="reset">Clear</button>
                    </div>
                </div>
            </fieldset>
        </form>
                <div id="showTransportation">
            <h1>City FROM: Belgrade - City TO: Budapest</h1>
            <button><a href="./life.html">Life in...</a> </button>
            <div className="middle-wrapper">
                <h2> Airplane</h2>
                <div className="provider-div">

                    <div className="provider">
                        <img className="provider-logo" src={logoAirplane} alt="AirSerbia logo"/>
                        <h2>Provider name: AirSerbia
                            <br/>Type: Airplane
                        </h2>
                        <div>
                            <span className="heading">User Rating</span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <p>4.1 average based on 254 reviews.</p>
                            <button onClick={showProviderDetail}>
                                <a href="#showProviderDetail"> Details</a>
                            </button>
                            <button onClick={showAddComment}>
                                <a href="#userComment">Add Comment</a>
                            </button>
                        </div>
                    </div>
                    <div className="show-provider-detail" id="showProviderDetail" >
                        <hr style={{border:"3px solid #f1f1f1"}}/>

                        <div className="provider-detail">
                            <div className="left">
                                <p>Name: AirSerbia</p>
                                <p>Country: Serbia</p>
                                <p>City: Belgrade</p>
                                <p>Adress: Bulevar umetnosti bb</p>
                                <p>Phone:+381-11-444-444</p>
                                <p>Contact:</p>
                            </div>
                            <div className="right">
                                <h3>About company</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat
                                    viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet
                                    faucibus maximus. Proin non nulla lectus.</p>
                                <button onClick={providerFeedback}>
                                    <a href="#showProviderFeedback">Feedback</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="showProviderFeedback" id="showProviderFeedback" >
                        <hr style={{border:"3px solid #f1f1f1"}}/>
                        <div className="providerFeedback">
                            <div>
                                <h2>User rating </h2>
                                <RangeDiv/>
                            </div>                           
                            <form style={{ backgroundColor: "yellow"}} id="formComment">
                                <fieldset>
                                    <legend>Comment</legend>
                                    Choose category:
                                    <br/>
                                    <br/> <span>Local transport    </span>
                                    <input type="radio" name="category" id="transport" />
                                    <br/>
                                    <span>Food & Entertainment</span>
                                    <input type="radio" name="category" id="food"/>
                                    <br/> <span>Safety    </span>
                                    <input type="radio" name="category" id="safety"/>
                                    <br/>
                                    <span>Local culture</span>
                                    <input type="radio" name="category" id="localCulture"/>
                                    <br/><span>Airport</span>
                                    <input type="radio" name="category" id="airport"/>
                                    <br/>Add your comment:
                                    <br/>
                                    <br/>
                                    <textarea cols="60" rows="10" name="information" 
                                    id="informationLife" 
                                    placeholder="Write some information about life in the city"
                                    ></textarea>
                                    <br/>
                                    <button className="choose-destination-button">Choose destination</button>
                                    <button type="button"  onClick={addInformation}>Comment</button>
                                    <button type="reset" onClick={clearSelection}>Clear</button>
                                </fieldset>
                            </form>
                            <div id="showComments">
                                <form>
                                    <h2>Show Comments:</h2>

                                    <div className="comment" id="comment1">
                                        <div className="user">
                                            <img className="avatar" src={avatar} alt="user"/>

                                            <p>Author: Pera Peric</p>
                                            <p>Date:01.01.2013</p>
                                        </div>
                                        <div className="text-comment">
                                            <h2> Exelent company</h2>
                                            <p>Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                                cubilia Curae; Nam volutpat viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat
                                                blandit. Cras egestas lectus sit amet faucibus maximus. Proin non nulla lectus.
                                            </p>

                                        </div>
                                        <div className="range">
                                            <div>
                                                <span className="heading">User Rating</span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>

                                            </div>
                                            <br/><br/>
                                            <input type="checkbox"/> Choose comment
                                        </div>
                                    </div>
                                    <div className="comment" id="comment2">
                                        <div className="user">
                                            <img className="avatar" src = {avatar} alt="user"/>

                                            <p>Author: Dusko Dugousko</p>
                                            <p>Date:02.02.2019</p>
                                        </div>
                                        <div className="text-comment">
                                            <h2>Airplane is quite old...</h2>
                                            <p>Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                                cubilia Curae; Nam volutpat viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante .</p>

                                        </div>
                                        <div className="range">
                                            <div>
                                                <span className="heading">User Rating</span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star "></span>
                                                <span className="fa fa-star "></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>

                                            </div>
                                            <br/><br/>
                                            <input type="checkbox"/> Choose comment
                                        </div>
                                    </div>

                                    <div className="comment" id="comment3">
                                        <div className="user">
                                            <img className="avatar" src={avatar} alt="user"/>

                                            <p>Author: Marko Markovic</p>
                                            <p>Date:03.03.2003</p>
                                        </div>
                                        <div className="text-comment">
                                            <h2>Wonderfull trip</h2>
                                            <p>Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                                cubilia Curae; Nam volutpat viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames a</p>

                                        </div>
                                        <div className="range">
                                            <div>
                                                <span className="heading">User Rating</span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                            <br/><br/>
                                            <input type="checkbox"/> Choose comment
                                        </div>
                                    </div>
                                    <button>Delete comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div id="userComment" >
            <h1>Add feedback about transportation</h1>
            <p>or Add feedback about hotels, restoraunts, cities...</p>
            <div className="middle-wrapper">
                <div className="userComment">
                    <form>
                        <div className="provider">
                            <img className="provider-logo" src={logoAirplane} alt="AirSerbia logo"/>
                            <h2>Add feedback about AirSerbia</h2>
                            <div>
                                <span className="heading">User Rating</span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <p>4.1 average based on 254 reviews.</p>

                            </div>
                        </div>
                        Header:
                        <br/>
                        <textarea cols="100" rows="1" id="commentHeader" 
                        placeholder="Try to describe your range"></textarea>
                        <br/> Comment:
                        <br/>
                        <textarea cols="100" rows="10" placeholder="Place for your comment..."></textarea>
                        <br/>
                        <p className="message-range">Click for range</p>
                        <RangeDiv/>
                        <br/>
                        <button type="submit">Add feedback</button>
                    </form>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Enjoy;