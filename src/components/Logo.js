import React from 'react'

function Logo() {
  return (
        <img style={{
              display: "block", /* Remove any default inline styles */
              width: "8vw", /* Make sure the width is responsive */
              height: "8vw", /* Make sure the height is responsive */
              margin: "0",
              padding:"10px 0" /* Center the image within the container */
        }} src={process.env.PUBLIC_URL + '/sve.jpeg'} />
  )
}

export default Logo