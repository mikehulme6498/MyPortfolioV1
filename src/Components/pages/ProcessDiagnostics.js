import React from 'react';
import '../../App.css';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';


export default function Products(){
    const section1Title = "The Problem";
    const section1Text = 
        <div>
            <p>A process plant at Unilever is controlled by an old system developed in the 1980’s. The reporting system does give 
                a lot of information about production however it is all stored in text files.</p>
            <p> The only way to get diagnostics is to manually look at the reports yourself. The main problem here is if you wanted 
                to look how one particular part of the process was performing you would have to go through each report individually, record the data and then do the calculations.</p>
            <p>Roughly 400 batches of product are made per week, If we wanted to get a week’s worth of information it could take days of going through the reports.
                It is therefore not feasible to go through the reports to get diagnostic data.</p></div>
    
    return (
        <>
        <PageHeading title="Automated Process Diagnostics" text="Designed to revolutionise how the production plant diagnosis the the process"/>
        <PageBodySection heading="The Problem" text={section1Text} />
        <PageBodySectionWithImage 
            imagePosition="left" 
            image='/Images/StackedReports.png' 
            caption="Batch reports produced by the system"
            title="The Idea" 
            text={section1Text}
        />
        <PageBodySectionWithImage 
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            caption="Uploading batches as simple as drag and drop"
            title="The Results" 
            secondToLast={true}
            text={section1Text}
        />

        <PageBodySection 
            heading="Demo Video" text="A demo video showing some of the aspects of the software." 
            lastSection={true}
        />
        </>
    )
}