import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'

function Cards(props) {
    let backgroundColour = require('./Helpers/BackgroundColourPicker').setBGColourClass(props.bgColour);
    
    return (
        <div className={`cards ${backgroundColour}`} id="projects">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/DiagnosticCover5.png"}
                        title="APOS - Automated Process Optimization System"
                        desc="Converts plain text files into digital data for an immersive diagnostics system."
                        label="Web App"
                        path='/ProcessDiagnostics'
                        techUsed="C# / ASP.Net Core MVC / Entity / Web Sockets"
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/CryptoPic2.png"}
                        title="CryptoPic"
                        desc="Hides Passwords / Messages in images in a undetectable way."
                        label="Desktop App"
                        path='/CryptoPic'
                        techUsed="C# / .Net Framework / Winforms"
                        />
                    </ul>
                    <ul className="cards__items">
                        
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/PortfolioCover.png"}
                        title="My Portfolio"
                        desc="The site you are viewing now. The site that inspired you to hire me :)"
                        label="Web"
                        path='/MyPortfolio'
                        techUsed="React"
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/SodokuCover.png"}
                        title="Soduko Puzzle Solver"
                        label="Web App"
                        desc = "Built as a side project when learning Javascript."
                        path='/SudokuSolver'
                        techUsed="Javascript"
                        />
                       <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/lexletsoverview.png"}
                        title="Business Management Software"
                        label="Desktop App"
                        desc="Complete management studio for my wifes business. Manages Sales, Inventory, Accounts &amp; Customers."
                        path='/LexLetsManagement'
                        techUsed="C# / SQL / Winforms"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
