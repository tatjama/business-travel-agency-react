import React from 'react';

const Accommodation = () =>{
    function hideHome() {
        document.getElementById('home-page').style.display = "none";
    }
    return(
        <div onLoad={hideHome} className="pages">
            <h1>Accommodation</h1>
        </div>
    )
}

export default Accommodation;