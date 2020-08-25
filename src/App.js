import React from 'react';
import Intro from './pages/Intro';
import Start from './pages/Start';
import IntroHeader from './components/IntroHeader';

 function App(props){   
  return(
    <div>
      <div id = "intro-page">
        <IntroHeader/>  
        <Intro />
      </div>
      <div id = "start-page" style = {{display: "none"}}>
        <Start  />
      </div>
    </div>
  )
   
}

export default App