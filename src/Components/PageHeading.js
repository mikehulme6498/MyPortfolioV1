import React from 'react'
import {Button} from './Button'
import './css/Page.css'

function PageHeading(props) {
    return (
        
        <div className="page-heading">
                <div className="heading-title">{props.title}</div>
                <div className="heading-text">{props.text}</div>
                
                <div className="button-container">
                    {props.button}
                    {props.button2 }
                </div>
                   
        </div>     
    )
}

export default PageHeading
