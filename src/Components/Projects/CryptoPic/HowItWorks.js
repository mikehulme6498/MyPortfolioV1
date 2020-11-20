import React from 'react'

function HowItWorks() {
    return (
        <div>
            
            <p>
                An image is made of many pixels and each pixel has an RGB value which gives it its colour. 
                For example, Red is RGB(255,0,0)
            </p>
            <p>
                Every character on a computer has a number, for example, T = 84. The pixel's B value will be changed to 
                84 to represent T. RGB(255,0,84).
            </p>
            <p>
                This would change the colour of the pixel slightly. In the example to the right I have changed the red 
                pixels to hide the word 'the'.
            </p>
            <p>
                The colour difference is very small. It is almost undetectable when inside an image because all the 
                pixels are different shades anyway.
            </p>
            
        </div>
    )
}

export default HowItWorks
