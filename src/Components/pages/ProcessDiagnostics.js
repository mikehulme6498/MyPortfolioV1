import React from 'react';
import '../../App.css';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import DemoVideo from '../Projects/ProcessDiagnosticsText/DemoVideo';
import IdeaText from '../Projects/ProcessDiagnosticsText/IdeaText';
import NewBatchReportText from '../Projects/ProcessDiagnosticsText/NewBatchReportText';
import ProblemText from '../Projects/ProcessDiagnosticsText/ProblemText';
import ResultsHeadingText from '../Projects/ProcessDiagnosticsText/ResultsHeadingText';
import UploadResultText from '../Projects/ProcessDiagnosticsText/UploadResultText';


export default function Products(){
    
    return (
        <>
        <PageHeading 
            title="Automated Process Diagnostics" 
            text="Designed to revolutionise how the production plant diagnosis the process (Add button for video and github)"
        />
        
        <PageBodySectionWithImage 
            title="The Problem" 
            text={<ProblemText />}
            imagePosition="right" 
            image='/Images/ReportDemo.png' 
            caption="This is an example of one report (hover or click to expand)"
            imageShadow = {true}
            imageExpandable = {true}            
            shiftUpForLine={true}            
        />
        
        <PageBodySectionWithImage 
            title="The Idea" 
            text={<IdeaText />}
            imagePosition="left"  
            image='/Images/StackedReports.png'
            imageRounded={true}
            caption="The idea!"
            
        />
        <PageBodySection 
            title="The Results"
            text={<ResultsHeadingText />}
        />
        <PageBodySectionWithImage 
            title="Upload Batch Process" 
            text={<UploadResultText/>}
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            caption="Uploading batches as simple as drag and drop."           
        />

         <PageBodySectionWithImage 
            title="Easy batch search &amp; new batch reports" 
            text={<NewBatchReportText />}
            imagePosition="left"  
            image='/Gifs/UploadDemo.gif'
            caption="Easy search &amp; new batch report view."            
            secondToLast={true}            
        />

        <PageBodySection 
            title="Demo Video" 
            text={<DemoVideo />} 
            shiftUpForLine={true}
            bgColour="darkblue"
        />
        </>
    )
}