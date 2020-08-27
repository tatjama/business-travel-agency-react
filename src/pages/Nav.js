import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    //HAMBURGER MENU

    function openNavHamburger() {
        const myTopNav = document.getElementById("my-top-nav");
        if(myTopNav.className === "top-nav"){
            myTopNav.className += " responsive";
        } else {
            myTopNav.className = "top-nav";
        }
       // alert('Open Nav hamburger');
    }
    function signOut() {
        document.getElementById('start-page').style.display = "none";
        document.getElementById('intro-page').style.display = "block";
        document.getElementById('sign-in-form').style.display = "block";
        document.getElementById('go-sign-up-form').style.display = "block";
        //alert('Sign Out');
    }

    return(
        <div className="top-nav" id="my-top-nav">
           
            <ul>
                <Link to="/">
                 <li className="active">Home</li>
                </Link>
                <Link to="/intro">
                    <li>Intro</li>
                </Link>

                <Link to="/life">
                <li>Life ...</li>
                </Link>
                <Link to="/accommodation">
                <li>Accommodation</li>
                </Link>
                <Link to="/enjoy">
                <li >Enjoy ...</li>
                </Link>
                <Link to="/feedbacks">
                <li >Feedbacks</li>
                </Link>
                <Link to="/providers">
                <li id="providers" to="/providers">Providers</li>
                </Link>
                
                <li className="icon" onClick={openNavHamburger}>
                    <i className="fa fa-bars"></i>
                </li>
                
                <Link to="/intro">
                <li id="signOut" onClick={signOut}>Sign Out</li>
                </Link>
            </ul>
    </div>
    )
}

export default Nav;