import React from 'react';
import '../../App.css';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import DemoVideo from '../Projects/ProcessDiagnosticsText/DemoVideo';
import IdeaText from '../Projects/ProcessDiagnosticsText/IdeaText';
import NewBatchReportText from '../Projects/ProcessDiagnosticsText/NewBatchReportText';
import ProblemText from '../Projects/ProcessDiagnosticsText/ProblemText';
import UploadResultText from '../Projects/ProcessDiagnosticsText/UploadResultText';


export default function Products(){
    
    return (
        <>
        <PageHeading title="Automated Process Diagnostics" text="Designed to revolutionise how the production plant diagnosis the process"/>
        
        <PageBodySectionWithImage 
            imagePosition="left" 
            image='/Images/StackedReports.png' 
            caption="Batch reports produced by the system"
            title="The Problem" 
            text={<ProblemText />}
        />
        {/* <PageBodySection heading="The Idea" text={ideaText} /> */}
        <PageBodySectionWithImage 
            imagePosition="right"  
            image='/Images/DiagnosticCover2.png'
            imageRounded={true}
            imageLarge={true}
            caption="The idea!"
            title="The Idea" 
            text={<IdeaText />}
        />
        <PageBodySection 
            heading="The Results"
            text="The results are shown below showing some of the major features and benefits. There is also a video demo at the bottom of this page."
        />
        <PageBodySectionWithImage 
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            caption="Uploading batches as simple as drag and drop."
            title="Upload Batch Process" 
            text={<UploadResultText/>}
        />
         <PageBodySectionWithImage 
            imagePosition="left"  
            image='/Gifs/UploadDemo.gif'
            caption="Easy search &amp; new batch report view."
            title="Easy batch search &amp; new batch reports" 
            secondToLast={true}
            text={<NewBatchReportText />}
        />

        <PageBodySection 
            heading="Demo Video" 
            text={<DemoVideo />} 
            lastSection={true}
        />
        </>
    )
}