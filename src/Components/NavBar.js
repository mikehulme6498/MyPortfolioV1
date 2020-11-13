import React, {useState} from 'react'
import './css/NavBar.css'
import {Link} from 'react-router-dom'


function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    
    return(
        <nav className="navbar">
            <div className="navbar-container">            
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className="site-logo" src={process.env.PUBLIC_URL + '/Images/primero-on.png'} alt="logo2"></img>
            </Link>
            <div className="menu-icon primero-orange" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutMe" className="nav-links" onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Projects" className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                        

                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    </ul> 
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button> } */}
                
                <div className="navbar-social-icons">
                        <a className="navbar-linkedIn"
                        href="https://www.linkedin.com/in/mike-hulme-574a5a188/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        
                        <a className="social-icon-link gitHub"
                        href="https://github.com/mikehulme6498"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="linkedin">
                            <i className="fab fa-github"></i>
                        </a>                            
                    </div>
                    
                   
                </div>
        </nav>
    )
}
export default NavBar


