import React from 'react'

function Logo() {
  return (
        <img style={{
              display: "block", /* Remove any default inline styles */
              width: "100px", /* Make sure the width is responsive */
              height: "60px", /* Make sure the height is responsive */
              margin: "0" /* Center the image within the container */
        }} src={process.env.PUBLIC_URL + '/sve.jpeg'} />
  )
}

export default Logo