import React, {useRef} from 'react'
import {Button} from '../Button'
import PageHeading from '../PageHeading'
import PageBodySection from '../PageBodySection'
import PageBodySectionWithImage from '../PageBodySectionWithImage'
import ProblemText from '../Projects/LexLets/ProblemText'
import IdeaText from '../Projects/LexLets/IdeaText'
import LexletsDemo from '../Projects/LexLets/LexletsDemo'

function LexletsManagement() {
   
        const videoSection = useRef(null)
        const gotoVideoSection = () => window.scrollTo({
            top: videoSection.current.offsetTop + 100,
            behavior: "smooth"
        })
        return(
            <div>
                <PageHeading 
                title="Jewellery Business Management System" 
                text="A program designed to manage all aspects of my wifes jewellery business (My first C# Application)"
                button={<Button buttonStyle="btn--outline" icon="fab fa-youtube" onClick={gotoVideoSection}>Demo</Button>}
                button2={<Button buttonStyle="btn--outline" icon="fab fa-github" onClick={() => window.open("https://github.com/mikehulme6498/Lexlets_Management", "_blank")}>View Code</Button>}
            />
             <PageBodySectionWithImage 
                title="The Problem" 
                text={<ProblemText />}
                imagePosition="right" 
                image='/Images/lexletsLogo.png' 
                imageLink="https://www.lexlets.co.uk"
                caption="Store logo"
                shiftUpForLine={true}            
            />
    
            <PageBodySection 
                title="The Idea" 
                text={<IdeaText />}
                centerText={true}
                secondToLast={true}
            />   
    
            <div ref={videoSection}>
            <PageBodySection 
                title="The Result"
                text={<LexletsDemo />}
                bgColour="darkblue"            
                shiftUpForLine={true}
                centerText={true}
            />       
            </div>
            </div>
    )
}

export default LexletsManagement
