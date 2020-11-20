import React from 'react'
import PageHeading from '../PageHeading'
import PageBodySection from '../PageBodySection'
import {Button} from '../Button'
import ProblemText from '../Projects/MyPortfolio.js/ProblemText'

function MyPortfolio() {
    return (
        <div>
            <PageHeading 
                title="My Software Portfolio"
                text="The site you are viewing now. Built using React"
                button={<Button buttonStyle="btn--outline" icon="fab fa-github" onClick={() => window.open("https://github.com/mikehulme6498/MyPortfolioV1", "_blank")}>View Code</Button>}
            />

            <PageBodySection 
               title = "Project Background" 
               text={<ProblemText />}
            />  

            
        </div>
    )
}

export default MyPortfolio
