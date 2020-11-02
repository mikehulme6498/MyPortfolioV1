import React from 'react'

function PageBodySectionWithImage(props) {

    const imagePosition = props.imagePosition === "right" ? "image-right" : "image-left";
    const lastSection = props.lastSection === true ? "last-section" : "";
    const secondToLast = props.secondToLast === true ? "second-to-last-section" : "";
    const roundedImage = props.imageRounded === true ? "image-rounded" : "";
    const largeImage = props.imageLarge === true ? "image-large" : "image-normal";

    return (
        <div className={`page-body-section with-image ${imagePosition} ${lastSection} ${secondToLast}`}>
            <figure className="section-image-caption">
            <img src={process.env.PUBLIC_URL + `${props.image}`} className={`section-image ${roundedImage} ${largeImage}`} alt={props.image} />
            <figcaption>Fig - {props.caption}</figcaption>
            </figure>
            <div className="section-text-container">
            <div className="section-title">{props.title}</div>
            <div className="section-text">{props.text}</div>
            </div>
        </div>
    )
}

export default PageBodySectionWithImage

