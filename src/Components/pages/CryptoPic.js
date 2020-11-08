import React from 'react'
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import IdeaText from '../Projects/CryptoPic/IdeaText';
import ProblemText from '../Projects/CryptoPic/ProblemText';

function CrpytoPic(){
    return(
        <div>
            <PageHeading 
            title="CryptoPic" 
            text="Hide passwords / messages inside images"
        />
         <PageBodySectionWithImage 
            title="The Problem" 
            text={<ProblemText />}
            imagePosition="right" 
            image='/Images/cryptoSeed.png' 
            caption="Example of the random words given when creating a wallet"
            imageLarge={true}                
            shiftUpForLine={true}            
        />

        <PageBodySectionWithImage 
            title="The Idea" 
            text={<IdeaText />}
            imagePosition="left"  
            image='/Images/CryptoPicIdeaExample.png'
            imageLarge={true}
            secondToLast={true}            
            caption="Demonstration Of changing the B value"
            
        />   

        <PageBodySection 
            title="The Results"
            text="Video Here"
            bgColour="darkblue"            
            shiftUpForLine={true}
        />       
        </div>
    )
}

export default CrpytoPic