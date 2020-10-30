import React from 'react'
import { Button } from './Button'
import ScrollingText from './ScrollingText'
import './css/HeroSection.css'
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src={process.env.PUBLIC_URL + '/Videos/video-1.mp4'} autoPlay loop muted></video> */}
            {/* <h1>MY BEST APP</h1> */}
            <div className="profile-section">
            <div className="profile-pic">
                <img src={process.env.PUBLIC_URL +" /Images/Profile2.jpg"}></img>
            </div>
            <ScrollingText />
            
            </div>
            <div className="break"></div>
            
            <p>So far</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>

                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer <i className="far fa-play-circle"></i></Button>
           
            </div>
        </div>
    )
} 

export default HeroSection
