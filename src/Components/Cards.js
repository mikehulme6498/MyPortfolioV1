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
                        title="Automated Process Diagnostics"
                        desc="Converts plain text files into digital data for an immersive diagnostics system."
                        label="Web App"
                        path='/ProcessDiagnostics'
                        techUsed="C# / ASP.Net Core MVC / Entity / Javascript"
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
                        src={process.env.PUBLIC_URL + "/Images/test2.jpg"}
                        title="My Portfolio"
                        desc="The site you are viewing now. The site that inspired you to hire me :)"
                        label="Web"
                        path='/diagnostics'
                        techUsed="React"
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test3.jpg"}
                        title="Soduko Puzzle Solver"
                        label="Web App"
                        desc = "Built as a side project when learning Javascript."
                        path='/diagnostics'
                        techUsed="Javascript"
                        />
                       <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test4.jpg"}
                        title="Business Management Software"
                        label="Desktop App"
                        desc="Complete managemtn studio for my wifes business. Manages Sales, Inventory, Accounts &amp; Customers."
                        path='/diagnostics'
                        techUsed="C# / SQL / Winforms"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
