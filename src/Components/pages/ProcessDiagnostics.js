import React, { useRef } from 'react';
import '../../App.css';
import { Button } from '../Button';
import PageBodySection from '../PageBodySection';
import PageBodySectionWithImage from '../PageBodySectionWithImage';
import PageHeading from '../PageHeading';
import ProcessDemoVideo from '../Projects/ProcessDiagnosticsText/ProcessDemoVideo';
import IdeaText from '../Projects/ProcessDiagnosticsText/IdeaText';
import ProblemText from '../Projects/ProcessDiagnosticsText/ProblemText';



export default function ProcessDiagnostics(){

    const videoSection = useRef(null)
    const gotoVideoSection = () => window.scrollTo({
        top: videoSection.current.offsetTop + 100,
        behavior: "smooth"
    })

    return (
        <>
        <PageHeading 
            title="APOS (Automated Process Optimization System)" 
            text="Designed to revolutionize how an old process plant diagnosis the process"
            button={<Button buttonStyle="btn--outline" icon="fab fa-youtube" onClick={gotoVideoSection}>Video Demo</Button>}
            button2={<Button buttonStyle="btn--outline" icon="fab fa-github" onClick={() => window.open("https://github.com/mikehulme6498/APOS-Automatic-Process-optimization-system", "_blank")}>View Code</Button>}
        
        />
        
        <PageBodySectionWithImage 
            title="The Problem" 
            text={<ProblemText />}
            imagePosition="right" 
            image='/Images/ReportDemo.png' 
            caption="This is an example of a current report (hover or click to expand)"
            imageShadow = {true}
            imageExpandable = {true}            
            shiftUpForLine={true}            
        />
        
        <PageBodySectionWithImage 
            title="The Idea" 
            text={<IdeaText />}
            imagePosition="left"  
            image='/Images/StackedReports.png'
            imageShadow={false}
            secondToLast={true}            
            caption="Reports printed (there are 5 pages per report)"
            
        />
        <div ref={videoSection}>
            <PageBodySection 
                title="The Results"
                text={<ProcessDemoVideo />}
                bgColour="darkblue"            
                shiftUpForLine={true}
                centerText={true}
            />
        </div>

        {/* <PageBodySectionWithImage 
            title="Upload Batch Process" 
            text={<UploadResultText/>}
            imagePosition="right"  
            image='/Gifs/UploadDemo2.gif'
            imageLarge={true}
            caption="Uploading batches as simple as drag and drop."  
            bgColour="darkblue"
        />

         <PageBodySectionWithImage 
            title="Easy report search &amp; report views" 
            text={<NewBatchReportText />}
            imagePosition="left"  
            image='/Gifs/BatchSearch.gif'
            imageLarge={true}
            caption="Easy search &amp; new batch report view."            
            bgColour="darkblue"        
        />
         <PageBodySectionWithImage 
            title="Complaince Checks" 
            text={<ComplianceResultText />}
            imagePosition="right"  
            image='/Gifs/Compliance.gif'
            imageLarge={true}
            caption="Uploading batches as simple as drag and drop."  
            bgColour="darkblue"
        />

         <PageBodySectionWithImage 
            title="Control Charts" 
            text={<ControlChartResultsText />}
            imagePosition="left"  
            image='/Gifs/ControlCharts.gif'
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
        /> */}

        {/* <PageBodySection 
            title="Demo Video" 
            text={<DemoVideo />} 
            shiftUpForLine={true}
            bgColour="darkblue"
        /> */}
        </>
    )
}