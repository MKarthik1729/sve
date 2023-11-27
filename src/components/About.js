import React from 'react'
import '../App.css'
function About() {
  return (
    <div>
      <div className="b2 backgroundContainer con">
      <div className="column">
        <div className="centered-text">
          {/* Content for the first column */}
          <h2 style={{fontWeight:"200",fontSize:"50px"}}>About Us</h2>
        </div>
      </div>

      <div className="column">
        <div className="centered-text" style={{padding:"70px"}}>
          <p style={{fontSize:'20px'}}>Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer of precision machined parts and service provider in the field of Global supply chain management. The original vision of the founders, which continues to this day, is to deliver components and assemblies machined to the highest standards and services to be of outstanding value for our clients.</p>
        </div>
      </div>
    </div>

    <div className="b1 backgroundContainer con">
    <div className="column">
        <div className="centered-text">
          <h2 style={{fontWeight:"200",fontSize:"50px"}}>Why Us</h2>
        </div>
      </div>

      <div className="column">
        <ul className="centered-text" style={{padding:"50px"}}>
          <li style={{fontSize:'20px'}}>Visionary organization driven by Values and Culture.</li>
          <li style={{fontSize:'20px'}}>Nurture continues improvements to sustain and graduate relationships by Technology upgrades, VAVE, Productivity improvements.</li>
          <li style={{fontSize:'20px'}}>Willing to extend supply chain support on TCO and mitigate risk through VMI, Kanban, Consignment.</li>
          <li style={{fontSize:'20px'}}>Flexible and efficient in handling High mix low volume parts providing solutions to every part.</li>
          <li style={{fontSize:'20px'}}>Market oriented to support customers in both Spike and Dip</li>
          




        </ul>
      </div>
    </div>
    {/* <div className="b3 backgroundContainer">
      {/* Your content goes here 
    </div> */}
    </div>
  )
}

export default About