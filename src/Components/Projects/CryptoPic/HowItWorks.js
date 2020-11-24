import React from 'react'

function HowItWorks() {
    return (
        <div>
            
            <p>
                An image is made up of millions of pixels. Each pixel has a Red, Green, and Blue value known as RGB. This is how a pixel 
                is given its colour. For example, red is RGB(255,0,0)
            </p>
            <p>
                Every character on a computer has an ASCII value, for example, The value for T is 84.
                Using this, the letter T can be hidden by changing a pixels B value. For example, if the pixel was originally 
                red (255,0,0) it would become (255,0,84). This would then change the colour of the pixel slightly. In the example on this page, I have altered the red pixels to hide the word 'the'.
            </p>
            <p>
                The colour difference is so small that it's almost undetectable when inside an image, as all the surrounding pixels 
                will already be different shades. This would be repeated for every character in the message. 
            </p>
        </div>
    )
}

export default HowItWorks
