import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>
                My idea was to create an application that would use multiple forms of encryption then hide the encrypted
                message into an image. The image could be stored in multiple places amongst many other images and be 
                undetectable.
            </p>
            <p>
                Every pixel in an image has an RGB value. The idea is to store each character in the B value
                
                It would work by assigning a number of each character in the message and storing each character in
                a pixel within the image. For example, every pixel has an RGB value. let's say A had the value of 1.

                the B value in RGB would become 1
            </p>
            
        </div>
    )
}

export default IdeaText
