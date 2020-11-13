import React from 'react'
import emailjs from 'emailjs-com'
import {Button} from './Button'
import './css/ContactForm.css'

export default function ContactForm(props){

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_02zx396', e.target, 'user_iXiUAzPRhk9tyDCtZzuWE')
          .then((result) => {
              alert(result.text);
          }, (error) => {
              alert(error.text);
          });
          e.target.reset()
    }

    const buttonColour = props.buttonColour === "blue" ? "btn--darkblue" : "btn--outline";

    return(
        <div className="contact-form-container">
            <form onSubmit={sendEmail}>
            
            <div className="form-group">
                <input type="text" placeholder="Name" name="name"/>
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" name="email"/>
            </div>
            <div className="form-group">
                <textarea id="" cols="30" rows="8" placeholder="Your Message" name="message"/>
            </div>
        
            <Button type="submit" buttonStyle={buttonColour}>Send Message</Button>
            </form>
        </div>
    )
}
