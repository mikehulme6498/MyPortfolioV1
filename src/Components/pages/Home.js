import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import Cards from '../Cards'
import Footer from '../Footer'
import PageBodySection from '../PageBodySection'
import ProfileSection from '../ProfileSection'
import SkillSets from '../SkillSets'


function Home(){
    return (
        <>
            <ProfileSection /> 
            <PageBodySection 
                title="A Little About Me"
                text={<AboutMe />}
                shiftUpForLine={true}
                secondToLast={true}
            />
            <PageBodySection secondToLast={true} blankSection={true}/>
             <PageBodySection 
                title="Skill Set" 
                text={<SkillSets />}
                bgColour="darkblue"
                centerText ={true}
                shiftUpForLine={true} 
            />
            <PageBodySection secondToLast={true} blankSection={true} bgColour="darkblue"/>
            <PageBodySection
                title="Projects"
                text={<Cards />}
                bgColour="white"
                shiftUpForLine={true}
            />
           <PageBodySection secondToLast={true} blankSection={true}/>
           <PageBodySection
                title="Projects"
                text={<Footer />}
                bgColour="darkblue"
                shiftUpForLine={true}
            /> 
            
        </>
    )
}

export default Home