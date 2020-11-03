import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import Cards from '../Cards'
import Footer from '../Footer'
import PageBodySection from '../PageBodySection'
import ProfileSection from '../ProfileSection'


function Home(){
    return (
        <>
            <ProfileSection /> 
            <PageBodySection 
             title="About Me"
             text={<AboutMe />}
             shiftUpForLine={true}
             secondToLast={true}
            />
            <PageBodySection secondToLast={true} blankSection={true}/>
            <PageBodySection
            title="Projects"
            text={<Cards bgColour="darkblue" />}
            bgColour="darkblue"
            shiftUpForLine={true}
            />
            <Footer />
        </>
    )
}

export default Home