import React, {useEffect}from 'react'
import './App.css';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './Components/Header'
import ScrollingText from './Components/ScrollingText';
import NavBar from './Components/NavBar';
import Home from './Components/pages/Home';
import ProcessDiagnostics from './Components/pages/ProcessDiagnostics';
import Projects from './Components/pages/Projects';
import AboutMe from './Components/AboutMe';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  
  return (
    <>    
    
    <Router>
    <ScrollToTop />
      <NavBar />  
             
      <Switch>
        
        <Route path="/" exact component={Home}/>
        <Route path="/MyPortfolioV1" component={Home}></Route>
        <Route path="/Projects" component={Projects}></Route>
        <Route path="/AboutMe" component={AboutMe}></Route>
        <Route path="/ProcessDiag" component={ProcessDiagnostics}></Route>
      </Switch>
    </Router>
   
    </>
    //   <div className="content">            
    //   <div className="welcome-section">      
    //       <img className="profile-pic" src={process.env.PUBLIC_URL + "/Images/profile2.jpg"} alt="profile-pic"></img>
    //        <ScrollingText /> 
    //  </div>
    //  </div>
    
  );
}

export default App;
