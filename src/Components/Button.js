import React from 'react'
import './css/Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--darkblue']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    icon}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const useIcon = icon ? <i className={icon}></i> : null;
    
    return(
        // <Link to="/" className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} btn-mobile`}
            onClick={onClick}            
            type={type}
            >
                {useIcon}
                {children}
            </button>
        // </Link>
    )
}
