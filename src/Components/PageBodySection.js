import React from 'react'

function PageBodySection(props) {

    const lastSection = props.lastSection === true ? "last-section" : "";
    const secondToLast = props.secondToLast === true ? "second-to-last-section" : "";

    return (
        <div className={`page-body-section ${lastSection} ${secondToLast}`}>            
            <div className="section-heading">{props.heading}</div>
            <div className="section-text"><p>{props.text}</p></div>            
        </div>
    )
}

export default PageBodySection
