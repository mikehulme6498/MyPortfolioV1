import React from 'react'


function Header(){
    return(
        <nav className="nav-div">
            <img className="site-logo" src={process.env.PUBLIC_URL + './Images/primero-on.png'} alt="logo"></img>
            
            <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            
        </nav>
    )
}
export default Header
