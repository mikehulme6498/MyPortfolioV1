import React from 'react'

function HowItWorks() {
    return (
        <div>
            
            <p>
                An image is made up of millions of pixels. Each pixel has a Red, Green, and Blue value known as RGB. This is how a pixel 
                is given its colour. For example, Red is RGB(255,0,0)
            </p>
            <p>
                Every character on a computer has an ASCII value, for example, The ASCII value for T is 84.
                Using this, the letter T can be hidden by changing a pixels B value. for example, if the pixel was originally 
                Red (255,0,0) it would become (255,0,84). This would then change the colour of the pixel slightly. In the example on this page, I have altered the red pixels to hide the word 'the'.
            </p>
            <p>
                The colour difference is so small that it's almost undetectable when inside an image as all the surrounding pixels 
                will already be different shades. 
            </p>
            <p>
                This would be repeated for every character in the message. 
            </p>
            
            
        </div>
    )
}

export default HowItWorks
