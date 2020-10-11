import React, {useState} from 'react';

const initValuesForProvider = {
    type: "",
    name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    aboutProvider: "",
}

const ProviderDetailForm = () =>{
    const [isFormOpen, setIsFormOpen] = useState(true)
    function closeProviderEdit() {
        alert('Close provider Edit')
        setIsFormOpen(false)
    }
    return(
        
        <form className="show-provider-edit " id="showEditProvider" >
                            <hr style={{"border":"3px solid #f1f1f1 "}}/>
        {isFormOpen                
        && <div className="provider-detail-form " id="providerDetail">
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
                <p>Address:</p><input type="text"/>
                <p>Phone:</p><input type="text"/>
            </div>
            <div className="right ">
                <h3>About company</h3>
                <textarea cols="50" rows="20"></textarea>
                                    <br/>
                
            </div>
            <div>
            <button onClick={closeProviderEdit}>Close Edit</button>
                <button type="submit">Submit</button>
            </div>
        </div>
        }
        </form>
    )
}

export default ProviderDetailForm;