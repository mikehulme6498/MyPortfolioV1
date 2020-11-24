import React from 'react'

function EmbeddedExample() {
    return (
        <div>
            <p>
                The pixel with the arrow pointing to it has had the B value changed to hide the letter H. As you can see, every 
                surrounding pixel is a slightly different colour. Without the arrow pointing to it, it would be impossible to
                work out what pixel was modified.
            </p>
            {/* <img src={process.env.PUBLIC_URL +"/Images/CryptoPicIdeaExample.png"} height="200"></img> */}
            
        </div>
    )
}

export default EmbeddedExample
