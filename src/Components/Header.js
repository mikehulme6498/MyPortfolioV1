import React from 'react'


function Header(){
    return(
        <div className="nav-div">
            <img className="site-logo" src={process.env.PUBLIC_URL + './Images/primero-on.png'} alt="logo"></img>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header
