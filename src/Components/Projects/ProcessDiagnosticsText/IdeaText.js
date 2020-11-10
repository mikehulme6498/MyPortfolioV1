import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>
                The idea was to create software that would read through each text file and extract all the information into digital 
                and manageable data. This could then be stored in a database and queried as needed.
            </p>
            <p>
                As a result, all the information would be retrievable in seconds! Due to this, the reports can then be used to their 
                full potential.
                <br />
                Here is a list of the proposed benefits.
            </p>

            <ul className="ul-in-paragraph">
                <li>Batch reports are broken down and easy to understand.</li>
                <li>Stoppage data for engineers to plan maintenance.</li>
                <li>Potential quality issues are highlighted.</li>
                <li>Material Overweigh / Underweigh data.</li>
                <li>Use data to create control charts to prevent issues before they happen.</li>
                <li>Compliance data for the entire plant.</li>
            </ul>
            <p>
                All of the above is not currently possible without spending 100’s of hours gathering the data manually.
                The software will be designed so all the above is easy to obtain for any user of the software.
            </p>
        </div>
    )
}

export default IdeaText
