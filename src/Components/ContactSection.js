import React from 'react'
import ContactForm from './ContactForm'

function ContactSection() {
    return (
        <div className="contact-section">
            <div className="contact-details">
                <span className="contactText">Please fill out the contact form or use one of the methods below.</span>
                
                    <div className="social-icons">
                        <a href="mailto: mike@primerosoftware.co.uk" title="Send me an email"><i className="fas fa-envelope-square"></i></a>
                        <a href="https://www.linkedin.com/in/mike-hulme-574a5a188/" target="_blank" title="Contact me on LinkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/mikehulme6498" target="_blank" title="View my GitHub" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.youtube.com/channel/UCnjmBJk0yOd9LDvJHARkdZQ" target="_blank" title="View my YouTube Channel" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
                        
                    </div>
                    <div className="form-section">
                <ContactForm buttonColour="blue"/>
            </div>
            </div>
            
        </div>
    )
}

export default ContactSection
