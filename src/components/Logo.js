import React from 'react'

function Logo() {
  return (
    <div>
        <img style={{
              maxWidth: "100%",
              maxHeight: "100%", /* Restrict the image to the container's height */
              display: "block", /* Remove any default inline styles */
              width: "100px", /* Make sure the width is responsive */
              height: "60px", /* Make sure the height is responsive */
              margin: "auto" /* Center the image within the container */
        }} src={process.env.PUBLIC_URL + '/sve.jpeg'} />
    </div>
  )
}

export default Logo