import React from 'react';

const Figure = (props)=>{
    return(
        <figure>
        <a href="#transport" onClick = {showLocalTransport}>
          <img src = {astronaut}  alt="space astronaut"/>
          <figcaption>Local transport</figcaption>
        </a>
    </figure>
    )
}

export default Figure;