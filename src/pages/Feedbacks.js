import React, {useState, useEffect} from 'react';
import {useAppContext} from '../libs/contextLib';
import Button from '../components/Button';
import ProviderInfo from '../components/ProviderInfo';
import providersInfo from '../components/data/providersInfo';
import CommentFromUsers from '../components/CommentFromUsers';

const Feedbacks = ()=>{    
    const [providersInfoArray, setProvidersInfoArray] = useState(providersInfo);
    const [commentsArray, setCommentsArray] = useState([])
    const [showMyCommentsList, setShowMyCommentsList] = useState(false)
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated);

    let newProvidersInfoArrayFromLocalStorage = []
    const providersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray')) || []
    
    useEffect(() => {       
    if(providersInfoArrayFromLocalStorage.length === 0){
        localStorage.setItem('providersArray', JSON.stringify(providersInfoArray))
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray'))
    } else{
        newProvidersInfoArrayFromLocalStorage = JSON.parse(localStorage.getItem('providersArray'))
    }
    setProvidersInfoArray(newProvidersInfoArrayFromLocalStorage)
    console.log(providersInfoArray)
    }, [])
    
    const showMyComments = () => {       
        console.log(commentsArray)
        setShowMyCommentsList(true)
    }
    useEffect(() => {
        const commentsArrayFromLocalStorage = JSON.parse(localStorage.getItem('commentsArray'))
        console.log(commentsArrayFromLocalStorage) 
        function findCommentsByUserName(comment){
            return comment.comment.user.username == isUserAuthenticated.logInUser.firstName 
        }
        const myCommentsArray = commentsArrayFromLocalStorage.filter(findCommentsByUserName) 
        setCommentsArray(myCommentsArray)
    }, [])

    return(
        <div className="page-feedback">
            <header className="header" id="header-feedback">
                <div id="message" style={{"color": "rgb(29, 150, 187)"}}>
                    Add comment {isUserAuthenticated.logInUser.firstName + " " + isUserAuthenticated.logInUser.lastName}                   
                </div>
                <Button
                    name = "My comments"
                handleOnClick = {showMyComments}
            />
            </header>            
                <h3>Feedback about Providers</h3>           

            <div className="wrapper">                
                <div id="showTransportation">
                    {showMyCommentsList
                        && <>
                           <h1> My Comment List </h1>
                           {commentsArray.map((comment) => {
                               return(
                                   <div key = {comment.comment.id}>
                                       <CommentFromUsers comment = {comment.comment}/>
                                   </div>
                               )
                           })}
                            </>
                    }

                    <h1>Provider list:</h1>
                    {providersInfoArray.map((provider) => {
                        return(
                            <ProviderInfo
                                info = {provider}
                                key = {provider.id}
                                id = {provider.id}
                            />
                        )
                    })}
                </div>
            </div>    
        </div>
    )
}

export default Feedbacks;