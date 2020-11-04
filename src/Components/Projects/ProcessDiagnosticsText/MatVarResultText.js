import React from 'react'

function MatVarResultText() {
    return (
        <>
          <p>
              Material variance is the amount a material over or underweighed compared to its target. In this section
              of the application you can see in order the biggest gains and losses over the specified timeframe. The system has knowledge of 
              all the materials including the cost per ton allowing to not only display the amount lost or gained in Kilograms but also the total
              cost to the company. 
           </p>
           <p>
               You can click on the magnifying glass of any of the materials to go even deeper into the issue. This will show you exactly
                how much was lossed or gained on each process stream which include the amount and the total occurances. and displays the percentage
                of each stream. For example if one process stream was the cause of 80% of the problem the engineers know exactly where to look.
          </p>  
        </>
    )
}

export default MatVarResultText
