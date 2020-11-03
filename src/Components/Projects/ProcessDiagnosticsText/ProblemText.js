import React from 'react'

function ProblemText() {
    return (
        <div>
            <p>
                Rosemount is an old process control system that was developed in the 1980s. Currently, for data gathering, it 
                produces a batch report in a text file for every batch created (example on the right). 
            </p>
            <p>
                Currently, it takes 10 minutes to decode a single batch report. Taking into account the batches made in 2019, it will take 
                approximately one year to go through them all making it not feasible to go through each report to extract meaningful information or trends
            </p>
           <p>
                Then you have all the hours of manipulating the data in spreadsheets to generate any kind of reports. 
           </p>
        </div>
    )
}

export default ProblemText
