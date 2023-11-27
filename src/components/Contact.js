import React from 'react'

function Contact() {
  return (
    <div>
    <div className="b2 " style={{textAlign:"center",color:"aliceblue",padding:"20px"}}>
      <h2>Contact Us</h2>
      <p>We are happy and glad to establish contacts with you, please write to planthead@sriveluenterprises.com</p>
      <p>for general queries and get in touch with any of Succinnovian listed below for specific queries or swift responses.</p>
      <div >
        <img src={'/velu.jpeg'} style={{height:"250px"}}/>
        <p>Gnanavelu s, Director, +91 998006665, Gnanavel@sriveluenterprises.com</p>
      </div><br />
      <p>Sri Velu Enterprises operates in IST time zone, you will get a response within 24 hours the maximum <br/>if you happen
to be from the time zone with a time difference of 6+ hours to IST.</p>
    </div>
    </div>
  )
}

export default Contact