import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMeText'
import Cards from '../Cards'
import FeatureProjectText from '../FeatureProjectText'
import Footer from '../Footer'
import PageBodySection from '../PageBodySection'
import PageBodySectionWithImage from '../PageBodySectionWithImage'
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
            <PageBodySection  title="Feature Project" />
            <PageBodySectionWithImage
                // title="APOS - Automated Process Optimization System"
                text={<FeatureProjectText />}
                image="/Images/DiagnosticCover5.png"
                imagePosition="right"
                imageRounded={true}
                imageShadow={true}
                bgColour="white"
                
            />
           <PageBodySection secondToLast={true} blankSection={true}/>
           <PageBodySection                
                text={<Footer />}
                bgColour="darkblue"
                shiftUpForLine={true}
            /> 
            
        </>
    )
}

export default Home