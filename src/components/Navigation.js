import React from 'react';

const Navigation = () => {

    function openNavHamburger() {
        alert('Open Nav hamburger');
    }
    function signOut() {
        alert('Sign Out');
    }

    return(
        <div className="top-nav" id="my-top-nav">
            <ul>
                <li className="active">Home</li>
                <li>Life ...</li>
                <li>Accommodation</li>
                <li >Enjoy ...</li>
                <li >Feedbacks</li>
                <li id="providers">Providers</li>
                <li className="icon" onClick={openNavHamburger}>
                    <i className="fa fa-bars"></i>
                </li>
                <li id="signOut" onClick={signOut}>Sign Out</li>
            </ul>
    </div>
    )
}

export default Navigation;