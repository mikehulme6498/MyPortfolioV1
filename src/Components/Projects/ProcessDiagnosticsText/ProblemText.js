import React from 'react'

function ProblemText() {
    return (
        <div>
            <p>
                Rosemount is an old process control system that was developed in the 1980s. Currently, 
                for data gathering, it produces a batch report in a text file for every batch created 
                (example on the right). 
            </p>
            <p>
                Presently, it takes 10 minutes to decode a single batch report. Using the 2019 batches
                as an example, I calculated that it would take approximately one year to extract all the 
                relevant data in order to create diagnostic information and trends. This is clearly unfeasible!
            </p>
            <p>
                Furthermore, there is no live data that can help drive proactive maintenance or improvements 
                to the process.
            </p>
           
        </div>
    )
}

export default ProblemText
