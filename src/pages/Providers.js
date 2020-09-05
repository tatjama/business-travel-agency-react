import React from 'react';
import SelectForm from '../components/SelectForm';
import logoAirplane from '../images/logoavio1.webp';

const Providers = ()=>{
    function closeProviderEdit() {
        alert('Close provider Edit')
    }
    function closeProviderDetail(){
        alert("Close provider detail")
    }
    function showProviderDetail(){
        alert("Show provider detail")
    }
    function showProviderEdit(){
        alert ("Show provider Edit")
    }
    return(
        <div className="page-providers">
            <header className="header" id="header-providers" >
            <div id="message" style={{"color": "rgb(52, 87, 128)"}}></div>
            <SelectForm/>
            </header>

            <div className="wrapper">
                <div id="showTransportation">
                    <h1>Provider list:</h1>
                    <div className="middle-wrapper ">
                        <div className="provider-div ">
                            <div className="provider ">
                                <div className="left">
                                    <img className="provider-logo " src={logoAirplane}/>
                                    <h2>Provider name: AirSerbia
                                    <br/>
                                    Type: Airplane
                                    </h2>
                                </div>
                                <div className="right">
                                    <span className="heading ">User Rating</span>
                                        <span className="fa fa-star checked "></span>
                                        <span className="fa fa-star checked "></span>
                                        <span className="fa fa-star checked "></span>
                                        <span className="fa fa-star "></span>
                                        <span className="fa fa-star "></span>
                                        <p>4.1 average based on 254 reviews.</p>
                                    <button onClick={showProviderDetail}> Details</button>
                                    <button onClick={showProviderEdit} >Edit</button>
                                </div>

                            </div>
                            <div className="show-provider-detail " id="showProviderDetail ">
                                <hr style={{"border":"3px solid #f1f1f1 "}}/>
                                <div className="provider-detail " id="providerDetail">
                                    <div className="left ">
                                        <p>Name: AirSerbia</p>
                                        <p>Country: Serbia</p>
                                        <p>City: Belgrade</p>
                                        <p>Adress: Bulevar umetnosti bb</p>
                                        <p>Phone:+381-11-444-444</p>
                                        <p>Contact:</p>
                                    </div>
                                    <div className="right ">
                                        <h3>About company</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus neque et nulla dictum, ac scelerisque quam ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam volutpat
                                             viverra dolor, ac efficitur libero commodo ac. Nam venenatis sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero et purus feugiat blandit. Cras egestas lectus sit amet
                                            faucibus maximus. Proin non nulla lectus.
                                        </p>
                                        <button onClick={closeProviderDetail}>
                                        Close Details
                                        </button>
                                    </div>

                                 </div>
                        </div>
                        <form className="show-provider-edit " id="showEditProvider" >
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>

                            <div className="provider-detail " id="providerDetail">
                                <div className="left ">
                                    <p>Type:</p>
                                    <br/>
                                        <input list="typeProvider" name="typeProvider"/>
                                        <datalist id="typeProvider">       
                                            <option value="Airplane"/>
                                            <option value="Bus"/>
                                            <option value="Company car"/>
                                            <option value="Rent a car"/>
                                            <option value="Train"/>
                                            <option value="Taxi"/>  
                                        </datalist>
                                        <p>Name:</p><input type="text"/>
                                        <p>Country:</p><input type="text"/>
                                        <p>City:</p><input type="text"/>
                                        <p>Street name:</p><input type="text"/>
                                        <p>Street number:</p><input type="number"/>
                                        <p>Phone:</p><input type="text"/>
                                </div>
                                <div className="right ">
                                    <h3>About company</h3>
                                    <textarea cols="50" rows="20"></textarea>
                                    <br/>
                                    <button onClick={closeProviderEdit}>
                                            Close Edit
                                    </button>
                                    <button type="submit">Submit</button>
                                </div>

                            </div>
                        </form>

                </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Providers;