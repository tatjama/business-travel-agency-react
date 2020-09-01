import React from 'react';
import UserComment from './UserComment';
import airSerbiaLogo from '../images/logoavio1.webp';
import CommentsForm from './CommentsForm';

class GeneralInformation extends React.Component {
    
    
    render(){
        return(
            <div className = "general-information"  id= {this.props.id}>
                <div className = "general-information-list">
                    <h1>{this.props.informationTitle}</h1>
                           <h2> {this.props.informationSubtitle}</h2>
                            <ul>
                                <li>{this.props.li1}</li>
                                <li>{this.props.li2}</li>
                                <li>{this.props.li3}</li>
                                <li>{this.props.li4}</li>
                            </ul>
                            <button id={this.props.buttonId} onClick = {this.props.handleOnClick}>Add comment</button>
                 </div>
                <div className="user-comment" >
                    <h1>Add feedback about Local transport</h1>
                    <p>or Add feedback about hotels, restaurants, cities...</p>
                    <div className="middle-wrapper">
                        <UserComment
                                    source = {airSerbiaLogo}
                                    nameProvider = "Air Serbia"
                                    handleOnClick = {() =>{document.getElementById('user-comment').style.display = "none";}}
                        />                                
                    </div>
                </div>   
                <CommentsForm arrayComments = {this.props.arrayComments}/>   
            </div>
    
        )
    

    }
    }

export default GeneralInformation;