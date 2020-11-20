import React from 'react'

function IdeaText() {
    return (
        <div>
            <p>
                My idea was to create an application that would encrypt the message and then embed it into
                an image. The image could then be stored in multiple places such as cloud storage, USB drives, etc
            </p>
            <p>
                The user will have the option to add additional random words, three extra words will be added for every word
                the user enters. An encryption key (password) will be used to shift the characters around for example an 
                a could become k. 
            </p>
            <p>
                The pixels with the characters in will also not be stored in consecutive order. All of this would make
                it incredibly difficult to decode and get the true message back.
            </p>
        </div>
    )
}

export default IdeaText
