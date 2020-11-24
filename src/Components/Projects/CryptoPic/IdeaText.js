import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>
                My idea was to create an application that could encrypt a message and then embed it into an image. The image could then 
                be stored in multiple places such as cloud storage, USB drives, etc.
            </p>
            <p>
                In order to add further layers of security, the user will have the option to add additional random words to their original 
                message. The random word selection will include three extra words for every one input by the user. An encryption key password will then be 
                required to encrypt the message and also to retrieve it back.
            </p>
            <p>
                The characters that are stored within the pixels will also not remain in the correct order. This will again add another
                layer of security, making it incredibly difficult to decode.
            </p>
        </div>
    )
}

export default IdeaText
