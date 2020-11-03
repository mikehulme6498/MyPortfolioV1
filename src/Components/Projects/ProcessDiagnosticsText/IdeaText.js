import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>The idea was to create software that would read through each text file and extract all the data into digital 
                manageable data, which could be stored in a database and queried as needed.
            </p>
            <p>
                This would mean all the information would be retrievable in seconds. Meaning the reports could be used to there 
                full potential. Here is a list of proposed benefits.
            </p>

            <ul>
                <li>Batch reports broken down and easy to understand. (see result)</li>
                <li>Stoppage data for engineers to plan maintenance.</li>
                <li>Potential quality issues highlighted.</li>
                <li>Material Overweigh / Underway data.</li>
                <li>Use data to create control charts to prevent issues before they happend.</li>
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
