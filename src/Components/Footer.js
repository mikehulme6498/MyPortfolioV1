import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './css/Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Contact me for the best software you have ever seen
                </p>
                <p className="footer-subscription-text">
                    You can never cancel
                </p>
                <div className="input-areas">
                    <form className="footer-email-form">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/">More About me</Link>
                    <Link to="/">Testomonials</Link>
                    <Link to="/">Linked In</Link>
                    <Link to="/">Github</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <Link to="/">More About me</Link>
                    <Link to="/">Testomonials</Link>
                    <Link to="/">Linked In</Link>
                    <Link to="/">Github</Link>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            LinkedIn <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Mike 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedIn"
                        to="/"
                        target="_blank"
                        aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                            </Link>

                            <Link className="social-icon-link linkedIn"
                        to="/"
                        target="_blank"
                        aria-label="linkedin">
                            <i className="fab fa-github"></i>
                            </Link>                            
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
