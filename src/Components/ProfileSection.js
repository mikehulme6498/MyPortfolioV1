import React from 'react'
import './css/ProfileSection.css'
import '../App.css';


function ProfileSection() {
    return (
        <div className='profile-container'>
            {/* <video src={process.env.PUBLIC_URL + '/Videos/video-1.mp4'} autoPlay loop muted></video> */}
           
            <div className="profile-section">
            
            <div className="profile-description">
                <div className="title"> Hi, I'm Mike</div>
                <div className="message"><p>I am passionate about creating software that solves real world problems.</p>
                <p></p>
                
                </div>
            </div>
            <div className="profile-pic">
                <img src={process.env.PUBLIC_URL +"/Images/profile2.jpg"} alt="profile-pic"></img>
            </div>
            
            </div>
          </div>
    )
} 

export default ProfileSection
