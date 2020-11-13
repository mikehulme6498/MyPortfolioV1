import React from 'react'
import '../Components/css/AboutMe.css'

function AboutMeText() {
    return (
        <>          
            <p>
            At the age of 11, I started coding on my BBC Micro computer (showing my age 
            a bit here). I began copying from a coding book my Mum gave me and went on to create 
            my first application (a car racing game). This is where my passion for coding began.
            </p>

            <p>
            Then at the age of 13 whilst still at school, I joined college and completed two City &amp; Guilds 
            courses in Pascal and C. However, in my later teens, I unfortunately came away from coding. 
            This has always been a regret of mine, so therefore, 2 years ago I decided to begin learning again.
            </p>
            <p>Throughout the last 2 years I have become 
                <img src={process.env.PUBLIC_URL + '/Images/Microsoft.png'} alt="Microsoft Logo" className="microsoft-logo"></img> 
                certified in C#, ASP.net, Html / CSS / Javascript. I have built numerous applications and I now feel ready to shift 
                my career into software development (where it belongs).
            </p>
        </>
    )
}

export default AboutMeText

