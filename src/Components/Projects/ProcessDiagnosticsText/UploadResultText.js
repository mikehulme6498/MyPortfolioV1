import React from 'react'

function UploadResultText() {
    return (
        <div>
            <p>Getting batches into the system is done in two ways. 1 automatically uploads the report when they are created
             by the system. The other method (shown on the right) is a very simple drag and drag system.</p>
                
             <p>Users can drop upto 300 batch report into the system. It takes around 3-4 seconds to convert all of them, store them in a database and they
                are then available for viewing at any time. This alone is an incredible step forward from the current system.</p>

              <p>There is a very thorough error checking system in place to prevent unwanted data ending up in the database, such as bogus
                reports, incomplete reports or any other issue. If it is not a complete report or has any invalid charactors it will not
                convert.
                </p> 
                <p>
                    Any failed files are reported to the users with an explanation why it failed.
                </p>
        </div>
    )
}

export default UploadResultText
