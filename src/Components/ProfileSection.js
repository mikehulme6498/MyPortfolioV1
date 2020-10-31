import React from 'react'
import { Button } from './Button'
import ScrollingText from './ScrollingText'
import './css/ProfileSection.css'
import '../App.css';


function ProfileSection() {
    return (
        <div className='profile-container'>
            {/* <video src={process.env.PUBLIC_URL + '/Videos/video-1.mp4'} autoPlay loop muted></video> */}
            {/* <h1>MY BEST APP</h1> */}
            <div className="profile-section">
            
            <div className="profile-description">
                <div className="title"> Hi, I'm Mike</div>
                <div className="message"><p>I am passionate about creating software that solves real world problems.</p>
                <p></p>
                
                </div>
            </div>
            <div className="profile-pic">
                <img src={process.env.PUBLIC_URL +"/Images/profile2.jpg"}></img>
            </div>
            
            </div>
            
            
            {/* <p>So far</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>

                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer <i className="far fa-play-circle"></i></Button>
           
            </div> */}
        </div>
    )
} 

export default ProfileSection
