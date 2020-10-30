import React, {useState, useEffect} from 'react'
import './css/NavBar.css'
import {Link} from 'react-router-dom'
import { Button } from './Button.js';

function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <nav className="navbar">
            <div className="navbar-container">            
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className="site-logo" src={process.env.PUBLIC_URL + './Images/primero-on.png'} alt="logo"></img>
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
                        <Link to="/testing" className="nav-links" onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ProcessDiagnostics" className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button> }
                </div>
        </nav>
    )
}
export default NavBar


