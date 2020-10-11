import React, {useEffect, useState} from 'react';
import SelectForm from '../components/SelectForm';
import ProviderHeading from '../components/ProviderHeading';
import ProviderDetail from '../components/ProviderDetail';
import ProviderDetailForm from '../components/ProviderDetailForm';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';

const initialButtonName = "Show Details";

const Providers = ()=>{
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)

    function showProviderDetail(){
        (isShowDetail === false)? setIsShowDetail(true): setIsShowDetail(false)      
    }
   
    function showProviderEdit(){
        (isShowEdit === false)? setIsShowEdit(true): setIsShowEdit(false)
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
                                <Button
                                    name = "Details"
                                    handleOnClick={showProviderDetail}
                                />
                                <Button
                                    name = "Edit"
                                    handleOnClick = {showProviderEdit}
                                />
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