import React from 'react'

function ProblemText() {
    return (
        <div>
            <p>A process plant at Unilever is controlled by an old system developed in the 1980’s. The reporting system does give 
                a lot of information about production however it is all stored in text files.</p>
            <p> The only way to get diagnostics is to manually look at the reports yourself. The main problem here is if you wanted 
                to look how one particular part of the process was performing you would have to go through each report individually, record the data and then do the calculations.</p>
            <p>Roughly 400 batches of product are made per week, If we wanted to get a week’s worth of information it could take days of going through the reports.
                It is therefore not feasible to do so.</p>
        </div>
    )
}

export default ProblemText
