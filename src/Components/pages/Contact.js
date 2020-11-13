import React from 'react'
import ContactForm from '../ContactForm'
import PageHeading from '../PageHeading'
import PageBodySection from '../PageBodySection'
import '../css/Contact.css'
import ContactSection from '../ContactSection'

function Contact() {
    return (
        <>
        <PageHeading 
             title="Contact Me"
             text="If you would like to talk about any of my projects or just me in general please get in touch."
        /> 

        <PageBodySection 
            text={<ContactSection/>}
            shiftUpForLine={true}
        />
            
            
        
        </>
    )
}

export default Contact
