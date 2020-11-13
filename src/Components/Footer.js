import React from 'react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './css/Footer.css'


function Footer() {
    return (
        <>
        {/* <div className="contact-title">Contact Me....</div>
        <div className="footer-container">
            <h1>Email</h1>
            <h1>LinkedIn</h1>
            <div className="footer-contact-form">
                <h1>Contact Me</h1>
         <ContactForm />

         </div>
         
        </div> */}
        <div className="madeby">Site created by Mike Hulme</div>
        </> 
        // <div className="footer-container">
        //     <section className="footer-subscription">
        //         <p className="footer-subscription-heading">
        //             Contact me for the best software you have ever seen
        //         </p>
        //         <p className="footer-subscription-text">
        //             You can never cancel
        //         </p>
        //         <div className="input-areas">
        //             <form className="footer-email-form">
        //                 <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
        //                 <Button buttonStyle='btn--outline'>Subscribe</Button>
        //             </form>
        //         </div>
        //     </section>
        //     <div className="footer-link-wrapper">
        //         <div className="footer-link-items">
        //             <h2>About Me</h2>
                    
        //             <Link to="/">Linked In</Link>
        //             <Link to="/">Github</Link>
        //         </div>
        //         <div className="footer-link-items">
        //             <h2>Contact</h2>
        //             <Link to="/">mike@primerosoftware.co.uk</Link>
        //             <Link to="/">Testomonials</Link>
        //             <Link to="/">Linked In</Link>
        //             <Link to="/">Github</Link>
        //         </div>
        //     </div>           
                
        //     <small className="website-rights">Mike 2020</small>
                    
            
        //</div>
    )
}

export default Footer
