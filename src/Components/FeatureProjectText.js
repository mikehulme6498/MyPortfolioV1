import React from 'react'
import { Button } from './Button'
import './css/FeatureProject.css'

function FeatureProjectText() {
    return (
        <div className="feature-project">
            <div className="project-title">APOS - Automated Process Optimization System</div>
            <div className="project-description">
                
                This project was deisgned to take an old process reporting system and bring it into the
                the modern age, with real-time feedback on process performance and quality.<br /><br />
                This application reads raw text file reports produced by the system and converts them into digital data stored in a database 
                for a fully featured diagnostics system.<br/><br/>
                It's the project I am most proud of as it has transformed the way the process is monitored and is driving improvements.
              </div>  
                <div className="tech-used-heading">Tech Used :</div>
                <div className="tech-used-text">C# / ASP.NET MVC Core / Entity / Web API / Bootstrap / JQuery</div>

            
            <div className="buttons">
            <Button buttonStyle="btn--darkblue" icon="fas fa-info-circle" path="/processDiagnostics">View More</Button>
            <Button buttonStyle="btn--darkblue" icon="fab fa-youtube" onClick={() => window.open("https://www.youtube.com/watch?v=8UuJjG11PVg&ab_channel=MikeHulme", "_blank")}>Video Demo</Button>
            </div>
        </div>
    )
}

export default FeatureProjectText
