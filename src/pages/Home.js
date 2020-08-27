import React from 'react';
import SelectForm from '../components/SelectForm';

const Home = () =>{
    return(
      <header className="header" id="header-home">
                  <div id="message">Welcome to App</div>
                  <SelectForm/>
              </header>            
    )
  }

  export default Home;