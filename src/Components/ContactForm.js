import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {Button} from './Button'
import './css/ContactForm.css'

export default function ContactForm(props){

    const [result, setResult] = useState(null)
    const [resultIcon, setResultIcon] = useState(null)
    const [textColour, setTextColour] = useState(null)

        const handleSend = (success) => {
            if(success){
                setResult("Your message has been sent!")
                setResultIcon("fas fa-check-circle")
                setTextColour("success")
            }else{
                setResult("Message failed. Please try again")
                setResultIcon("fas fa-times-circle")
                setTextColour("failed")
            }
        }

    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm('gmail', 'template_02zx396', e.target, 'user_iXiUAzPRhk9tyDCtZzuWE')
          .then((result) => {
             handleSend(true)
          }, (error) => {
              handleSend(false);
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
            <div className={`send-result ${textColour}`}><i className={resultIcon}></i>{result}</div>
            </form>
        </div>
    )
}
