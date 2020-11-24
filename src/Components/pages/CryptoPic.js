import React, {useRef}from 'react'
import { Button } from '../Button';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import CryptoPicDemo from '../Projects/CryptoPic/CryptoPicDemo';
import EmbeddedExample from '../Projects/CryptoPic/EmbeddedExample';
import HowItWorks from '../Projects/CryptoPic/HowItWorks';
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
            text="Encrypts and hides passwords / messages inside images"
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

        <PageBodySection 
            title="The Idea" 
            text={<IdeaText />}
            centerText={true}
        />   

        <PageBodySectionWithImage
            title="How Embedding Works"
            text={<HowItWorks />}
            image="/Images/pixelExample.png"
            imagePosition="right"
            caption="Example of pixels with 'the' hidden in them"
            imageShadow={true}
            secondToLast={true}
        />
            <PageBodySectionWithImage
            title="Example of changed pixel in image"
            text={<EmbeddedExample />}
            image="/Images/CryptoPicIdeaExample.png"
            imagePosition="left"
            caption="Example of pixel changed within an image"
            imageShadow={true}
            secondToLast={true}
        />


        <div ref={videoSection}>
        <PageBodySection 
            title="The Result"
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