import React, {useState} from 'react';
import ProviderHeading from './ProviderHeading';
import ProviderDetail from './ProviderDetail';
import ProviderDetailForm from './ProviderDetailForm';
import Button from './Button';
import {useAppContext} from '../libs/contextLib';
import LeaveCommentForm from '../components/LeaveCommentForm';

const ProviderInfo = (props) =>{
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)
    const [isCommentForm, setIsCommentForm] = useState(false)
    const {isUserAuthenticated} = useAppContext();
    
    function showProviderDetail(){
        (isShowDetail === false)? setIsShowDetail(true): setIsShowDetail(false)      
    }
   
    function showProviderEdit(){
        (isShowEdit === false)? setIsShowEdit(true): setIsShowEdit(false)
    }

    const openCommentForm = (provider) => {
        console.log(provider)
        setIsCommentForm(true)
    }
    const closeCommentForm = () => {
        setIsCommentForm(false)
    }
    return(
        <div className="middle-wrapper ">
                        <div className="provider-div ">
                            <ProviderHeading
                                info = {props.info}
                            />                            
                            <div>
                                <Button
                                    name = "Details"
                                    handleOnClick={showProviderDetail}
                                />
                                {(isUserAuthenticated.logInUser.status === 1)
                                && <Button
                                    name = "Edit"
                                    handleOnClick = {showProviderEdit}
                                />}
                                {
                                    (isUserAuthenticated.logInUser.status === 0)
                                    && <Button
                                        name = "Leave comment"
                                        handleOnClick = {() => {
                                            openCommentForm(props.info)
                                        }}
                                    />
                                }
                            </div>
                            {isShowDetail 
                            && (props.id === props.info.id)
                            && <ProviderDetail
                                    info = {props.info}
                                />}
                            {isShowEdit 
                            && (props.id === props.info.id)
                            && <ProviderDetailForm
                                info = {props.info}
                                initValues = {props.info}
                                />}                          
                            {isCommentForm
                            && (props.id === props.info.id)
                            && <div>Loading...</div>}{/*<LeaveCommentForm
                                handleOnClick = {closeCommentForm}
                                info = {commentFromUser}
                            />*/}

                            
                        </div>
                    </div>
    )
}

export default ProviderInfo;