import React from 'react';

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
                        </div>
    
        )
    

    }
    }

export default GeneralInformation;