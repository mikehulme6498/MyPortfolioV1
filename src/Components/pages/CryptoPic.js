import React, {useRef}from 'react'
import { Button } from '../Button';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import CryptoPicDemo from '../Projects/CryptoPic/CryptoPicDemo';
import IdeaText from '../Projects/CryptoPic/IdeaText';
import ProblemText from '../Projects/CryptoPic/ProblemText';

function CrpytoPic(){

    const videoSection = useRef(null)
    const gotoVideoSection = () => window.scrollTo({
        top: videoSection.current.offsetTop + 100,
        behavior: "smooth"
    })
    return(
        <div>
            <PageHeading 
            title="CryptoPic" 
            text="Hide passwords / messages inside images"
            button={<Button buttonStyle="btn--outline" icon="fab fa-youtube" onClick={gotoVideoSection}>Demo</Button>}
            button2={<Button buttonStyle="btn--outline" icon="fab fa-github" onClick={() => window.open("https://github.com/mikehulme6498/CryptoPic", "_blank")}>View Code</Button>}
        />
         <PageBodySectionWithImage 
            title="The Problem" 
            text={<ProblemText />}
            imagePosition="right" 
            image='/Images/cryptoSeed.png' 
            caption="Example of the random words given when creating a wallet"
            shiftUpForLine={true}            
        />

        <PageBodySectionWithImage 
            title="The Idea" 
            text={<IdeaText />}
            imagePosition="left"  
            image='/Images/CryptoPicIdeaExample.png'
           
            secondToLast={true}            
            caption="Demonstration Of changing the B value"
            
        />   

        <div ref={videoSection}>
        <PageBodySection 
            title="The Results"
            text={<CryptoPicDemo />}
            bgColour="darkblue"            
            shiftUpForLine={true}
            centerText={true}
        />       
        </div>
        </div>
    )
}

export default CrpytoPic