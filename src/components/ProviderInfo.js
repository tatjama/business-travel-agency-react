import React, {useState} from 'react';
import ProviderHeading from './ProviderHeading';
import ProviderDetail from './ProviderDetail';
import ProviderDetailForm from './ProviderDetailForm';
import Button from './Button';

const ProviderInfo = (props) =>{
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)
    
    function showProviderDetail(){
        (isShowDetail === false)? setIsShowDetail(true): setIsShowDetail(false)      
    }
   
    function showProviderEdit(){
        (isShowEdit === false)? setIsShowEdit(true): setIsShowEdit(false)
    }
    return(
        <div className="middle-wrapper ">
                        <div className="provider-div ">
                            <ProviderHeading
                                src = {props.image}
                                info = {props.info}
                            />                            
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
                            {isShowDetail 
                            && <ProviderDetail
                                    info = {props.info}
                                />}
                            {isShowEdit 
                            && <ProviderDetailForm
                                info = {props.info}
                                />}                          
                        
                        </div>
                    </div>
    )
}

export default ProviderInfo;