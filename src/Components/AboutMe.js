import React from 'react'
import '../Components/css/AboutMe.css'

function AboutMe() {
    return (
        <div className="about-me-container">
            <h1 className="about-me-title">About Me</h1>
            <div className="about-me-text">
                <p>
                    As a young boy at the age of 11 I started coding on my BBC Micro computer (showing my age a bit here). I was copying from a coding book and created 
                    my first application (a car racing game). I was hooked.
                </p>
                <p>
                    I went on to college at 13 and completed City &amp; Guilds courses in Pascal and C. During my later teens I came away from it all. It's always been
                    in my mind to start coding again so 2 years ago I set out to get back in the game.
                </p>
                <p>
                    In the last 2 years I have become <img src={process.env.PUBLIC_URL + '/Images/Microsoft.png'} alt="Microsoft Logo" className="microsoft-logo"></img> certfied in C#, ASP.net, Html / CSS / Javascript. I have built numerous applications and am ready to shift
                    my career into software development (where it belongs).
                </p>
            </div>
        </div>
    )
}

export default AboutMe

