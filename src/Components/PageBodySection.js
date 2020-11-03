import React from 'react'


function PageBodySection(props) {

    const firstOrLastSectionSection = props.shiftUpForLine === true ? "shift-up-for-line" : "";
    const secondToLast = props.secondToLast === true ? "second-to-last-section" : "";
    let backgroundColour = require('./Helpers/BackgroundColourPicker').setBGColourClass(props.bgColour);

    
    return (
        <div className={`page-body-section ${secondToLast} ${firstOrLastSectionSection} ${backgroundColour}`}>  
        {/* <hr className="section-divide"></hr>           */}
            <div className="section-heading">{props.title}</div>
            <div className="section-text">{props.text}</div>            
        </div>
    )
}

export default PageBodySection
