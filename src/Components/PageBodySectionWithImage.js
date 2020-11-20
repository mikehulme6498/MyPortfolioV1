import React from 'react'

function PageBodySectionWithImage(props) {


    const imagePosition = props.imagePosition === "right" ? "image-right" : "image-left";
    const firstOrLastSection = props.shiftUpForLine === true ? "shift-up-for-line" : "";
    const secondToLast = props.secondToLast === true ? "second-to-last-section" : "";
    const roundedImage = props.imageRounded === true ? "image-rounded" : "";
    const largeImage = props.imageLarge === true ? "image-large" : "image-normal";
    const shadowImage = props.imageShadow === true ? "image-shadow" : "";
    const expandableImage = props.imageExpandable === true ? "image-expandable" : "";
    const image = 
            <img src={process.env.PUBLIC_URL + `${props.image}`} 
                            className={`section-image ${roundedImage} ${largeImage} ${shadowImage} ${expandableImage}`} 
                            alt={props.image} />;
    const imageLink = props.imageLink ? <a href={props.imageLink} target="_blank" rel="noreferrer" alt={props.imageLink}>{image}</a> : <div>{image}</div>;
    const imageCaption = props.caption ? <figcaption>Fig - {props.caption}</figcaption> : null;
    let backgroundColour = require('./Helpers/BackgroundColourPicker').setBGColourClass(props.bgColour);

    return (
        <div className={`page-body-section with-image ${imagePosition} ${firstOrLastSection} ${secondToLast} ${backgroundColour}`}>
            <figure className="section-image-caption">
            
            {imageLink}
            {imageCaption}
            </figure>
            <div className="section-text-container">
            <div className="section-title">{props.title}</div>
            <div className="section-text">{props.text}</div>
            </div>
        </div>
    )
}

export default PageBodySectionWithImage

