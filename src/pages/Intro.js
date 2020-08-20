import React from 'react';
import Footer from '../components/Footer';
import IntroHeader from '../components/IntroHeader';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


export default function Intro(){
    return(
        <div>
        <IntroHeader/>
        <SignIn/>
        
          {/*<!--SIGN UP POP-UP FORM-->*/}

          <div >
              <SignUp/>
          </div>
            <Footer/>
    </div>
    )
}