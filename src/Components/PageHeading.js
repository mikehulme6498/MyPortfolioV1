import React from 'react'
import './css/Page.css'

function PageHeading(props) {
    return (
        
        <div className="page-heading">
                <div className="heading-title">{props.title}</div>
                <div className="heading-text">{props.text}</div>
        </div>
        
        
    )
}

export default PageHeading
