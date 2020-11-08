import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>
                My idea was to create an application that would use multiple forms of encryption then hide the encrypted
                message into an image. The image could be stored in multiple places amonst many other images and be 
                undetactable.
            </p>
            <p>
                Every pixel in an image has a RGB value. The idea is to store each charctor in the B value
                
                It would work by assigning a number of each charactor in the message and storing each charactor in
                a pixel within the image. For exmaple every pixel has a RGB value. lets say A had the value of 1.

                the B value in RGB would become 1
            </p>
            
        </div>
    )
}

export default IdeaText
