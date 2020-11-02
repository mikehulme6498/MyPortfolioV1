import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
           <li className="cards__item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="/" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                <h5 className="cards__item__title">{props.title}</h5>
                <div className="cards__item__desc">{props.desc}</div>
                <div className="tech__used">Tech Used: {props.techUsed}</div>
                </div>
            </Link>   
            </li> 
        </>
    )
}

export default CardItem