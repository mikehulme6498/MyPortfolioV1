import React from 'react'
import './css/SkillLogo.css'

function SkillSets() {
    return (
        <div className="skill-logo-section">
            <br />
            <p>I am Microsoft certified in C#, Asp.net &amp; Javascript / HTML / CSS. I have also used the other technologies show below. </p>
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/Images/Logos/Csharp.png"} alt="CSharp" className="skill-logo"/>           
                <img src={process.env.PUBLIC_URL + "/Images/Logos/netcore.png"} alt="Net Core" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/dotnetmvc.png"} alt="Dot Net Core MVC" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/React.png"} alt="React" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/Javascript.png"} alt="Javascript" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/CSS.png"} alt="CSS" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/Html.png"} alt="Html" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/SQL.jpg"} alt="SQL" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/Photoshop.png"} alt="Photoshop" className="skill-logo"/>
                <img src={process.env.PUBLIC_URL + "/Images/Logos/Bootstrap.png"} alt="bootstrap" className="skill-logo"/>
            </div>
        </div>
    )
}

export default SkillSets
