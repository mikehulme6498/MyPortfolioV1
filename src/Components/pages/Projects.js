import React from 'react'
// import '../css/Cards.css'
import Cards from '../Cards'
import PageHeading from '../PageHeading'
import ProjectWelcome from '../ProjectWelcome'
import PageBodySection from '../PageBodySection'

function Projects() {
    return (
        // <div className="project-page">
        <div>
            <PageHeading
              title="Projects"
              text={<ProjectWelcome />}
              />
              <PageBodySection 
              title="Projects"
              text={<Cards />}
              shiftUpForLine={true}
            />
            
        </div>
    )
}

export default Projects

