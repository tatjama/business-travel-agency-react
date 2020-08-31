import React from 'react';

const GeneralInformation = (props) => {
    return(
        <div className = "general-informations"  id= {props.id}>
                        <h1>{props.informationTitle}</h1>
                        {props.informationSubtitle}
                        <ul>
                            <li>{props.li1}</li>
                            <li>{props.li2}</li>
                            <li>{props.li3}</li>
                            <li>{props.li4}</li>
                        </ul>
                        <button id={props.buttonId} onClick = {props.handleOnClick}>Add comment</button>
                    </div>

    )
}

export default GeneralInformation;