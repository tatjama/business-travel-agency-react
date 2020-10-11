import React, {useState} from 'react';
import SelectForm from '../components/SelectForm';
import ProviderHeading from '../components/ProviderHeading';
import ProviderDetail from '../components/ProviderDetail';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';

const Providers = ()=>{
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)

    function showProviderDetail(){
        alert("Show provider detail")
        setIsShowDetail(true)
    }
    function showProviderEdit(){
        alert ("Show provider Edit")
        setIsShowEdit(true)
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
                            <div>
                                <button onClick={showProviderDetail}> Details</button>
                                <button onClick={showProviderEdit} >Edit</button>
                            </div>
                            {isShowDetail && <ProviderDetail/>}
                            {isShowEdit && <ProviderDetailForm/>}                          
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Providers;