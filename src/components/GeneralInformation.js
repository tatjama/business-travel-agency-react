import React from 'react';
import UserComment from './UserComment';
import airSerbiaLogo from '../images/logoavio1.webp';

class GeneralInformation extends React.Component {
    
    
    render(){
        return(
            <div className = "general-information"  id= {this.props.id}>
                <h1>{this.props.informationTitle}</h1>
                            {this.props.informationSubtitle}
                            <ul>
                                <li>{this.props.li1}</li>
                                <li>{this.props.li2}</li>
                                <li>{this.props.li3}</li>
                                <li>{this.props.li4}</li>
                            </ul>
                            <button id={this.props.buttonId} onClick = {this.props.handleOnClick}>Add comment</button>
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
                         
            </div>
    
        )
    

    }
    }

export default GeneralInformation;