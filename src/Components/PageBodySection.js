import React from 'react'


function PageBodySection(props) {

    const firstOrLastSectionSection = props.shiftUpForLine === true ? "shift-up-for-line" : "";
    const secondToLast = props.secondToLast === true ? "second-to-last-section" : "";
    const blankSection = props.blankSection === true ? "blank-section" : "";
    const textCenter = props.centerText === true ? "text-center" : null;
    let backgroundColour = require('./Helpers/BackgroundColourPicker').setBGColourClass(props.bgColour);

    
    return (
        <div className={`page-body-section ${secondToLast} ${firstOrLastSectionSection} ${blankSection} ${backgroundColour}`}>  
        {/* <hr className="section-divide"></hr>           */}
            <div className="section-title">{props.title}</div>
            <div className={`section-text ${textCenter}`}>{props.text}</div>            
        </div>
    )
}

export default PageBodySection
