import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'

function Cards() {
    return (
        <div className="cards" id="projects">
            
            <h1>Projects</h1>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/process-main-menu.png"}
                        text="Diagnostics app to automate life"
                        label="Web App"
                        path='/diagnostics'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test.jpg"}
                        text="Stegography - Hide messages in images"
                        label="Desktop App"
                        path='/diagnostics'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test2.jpg"}
                        text="File watcher and uploader"
                        label="Desktop App"
                        path='/diagnostics'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test3.jpg"}
                        text="Soduko Puzzle Solver"
                        label="Web App"
                        path='/diagnostics'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + "/Images/test4.jpg"}
                        text="Business Management Software"
                        label="Desktop App"
                        path='/diagnostics'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
