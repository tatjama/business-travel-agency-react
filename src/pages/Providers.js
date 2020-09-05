import React from 'react';
import SelectForm from '../components/SelectForm';
import ProviderHeading from '../components/ProviderHeading';
import ProviderDetail from '../components/ProviderDetail';

const Providers = ()=>{
    function closeProviderEdit() {
        alert('Close provider Edit')
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
                            <ProviderHeading/>
                            <div className="show-provider-detail " id="showProviderDetail ">
                                <hr style={{"border":"3px solid #f1f1f1 "}}/>
                                 <ProviderDetail/>
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