import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import ScrollingText from './Components/ScrollingText';
import NavBar from './Components/NavBar';
import Home from './Components/pages/Home';
import ProcessDiagnostics from './Components/pages/ProcessDiagnostics';


function App() {
  return (
    <>
    <Router>
      <NavBar />         
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ProcessDiagnostics" component={ProcessDiagnostics}></Route>
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
