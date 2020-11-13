import React from 'react'
import AboutMeText from '../AboutMeText'
import PageBodySection from '../PageBodySection'
import PageHeading from '../PageHeading'

function AboutMe() {
    return (
        <>
            <PageHeading 
                title="About Me"
                text="A little about me"
            />

            <PageBodySection 
               
               text={<AboutMeText />}
            />  
        </>
    )
}

export default AboutMe
