import React from 'react';
import '../../App.css';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import ComplianceResultText from '../Projects/ProcessDiagnosticsText/ComplianceResultText';
import ConclusionText from '../Projects/ProcessDiagnosticsText/ConclusionText';
import ControlChartResultsText from '../Projects/ProcessDiagnosticsText/ControlChartResultsText';
import DemoVideo from '../Projects/ProcessDiagnosticsText/DemoVideo';
import IdeaText from '../Projects/ProcessDiagnosticsText/IdeaText';
import MatVarResultText from '../Projects/ProcessDiagnosticsText/MatVarResultText';
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
            secondToLast={true}
            imageRounded={true}
            caption="The idea!"
            
        />
        <PageBodySection 
            title="The Results"
            text={<ResultsHeadingText />}
            bgColour="darkblue"            
            shiftUpForLine={true}
        />

        <PageBodySectionWithImage 
            title="Upload Batch Process" 
            text={<UploadResultText/>}
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            imageLarge={true}
            caption="Uploading batches as simple as drag and drop."  
            bgColour="darkblue"
        />

         <PageBodySectionWithImage 
            title="Easy report search &amp; report views" 
            text={<NewBatchReportText />}
            imagePosition="left"  
            image='/Gifs/UploadDemo.gif'
            imageLarge={true}
            caption="Easy search &amp; new batch report view."            
            bgColour="darkblue"        
        />
         <PageBodySectionWithImage 
            title="Complaince Checks" 
            text={<ComplianceResultText />}
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            imageLarge={true}
            caption="Uploading batches as simple as drag and drop."  
            bgColour="darkblue"
        />

         <PageBodySectionWithImage 
            title="Control Charts" 
            text={<ControlChartResultsText />}
            imagePosition="left"  
            image='/Gifs/UploadDemo.gif'
            imageLarge={true}
            caption="Easy search &amp; new batch report view."            
            bgColour="darkblue"     
            
        />

        <PageBodySectionWithImage 
            title="Material Variance Information" 
            text={<MatVarResultText />}
            imagePosition="right"  
            image='/Gifs/UploadDemo.gif'
            imageLarge={true}
            caption="Uploading batches as simple as drag and drop."  
            bgColour="darkblue"
            
        />
        <PageBodySection 
        title="Conclusion"
        text={<ConclusionText />}
        bgColour="darkblue"
        
        />
        <PageBodySection 
            blankSection={true}
            secondToLast={true}
            bgColour="darkblue"
        />

        <PageBodySection 
            title="Demo Video" 
            text={<DemoVideo />} 
            shiftUpForLine={true}
            bgColour="white"
        />
        </>
    )
}