import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    
  );
}

export default App;
