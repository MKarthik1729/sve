import React from 'react'
import '../App.css'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MovingIcon from '@mui/icons-material/Moving';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RuleIcon from '@mui/icons-material/Rule';
function About() {
  const IconStyle = {
    fontSize:"100px",
    backgroundColor:"white",
    padding:"10px",
    color:"red",
    borderRadius:"50%"
  }
  return (
    <div>
      <div className="b2  con">
      <div className="column">
        <div className="centered-text">
          <h2 style={{fontWeight:"200",fontSize:"50px"}}>About Us</h2>
        </div>
      </div>

      <div className="column">
        <div className="centered-text" style={{padding:"70px"}}>
          <p style={{fontSize:'20px'}}>Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer of precision machined parts and service provider in the field of Global supply chain management. The original vision of the founders, which continues to this day, is to deliver components and assemblies machined to the highest standards and services to be of outstanding value for our clients.</p>
        </div>
      </div>
    </div>

    <div className="b1  con">
      <div className="column">
        <ul className="centered-text" style={{padding:"50px"}}>
          <li style={{fontSize:'20px'}}>Visionary organization driven by Values and Culture.</li>
          <li style={{fontSize:'20px'}}>Nurture continues improvements to sustain and graduate relationships by Technology upgrades, VAVE, Productivity improvements.</li>
          <li style={{fontSize:'20px'}}>Willing to extend supply chain support on TCO and mitigate risk through VMI, Kanban, Consignment.</li>
          <li style={{fontSize:'20px'}}>Flexible and efficient in handling High mix low volume parts providing solutions to every part.</li>
          <li style={{fontSize:'20px'}}>Market oriented to support customers in both Spike and Dip</li>
        </ul>
      </div>
    <div className="column">
        <div className="centered-text">
          <h2 style={{fontWeight:"200",fontSize:"50px"}}>Why Us</h2>
        </div> 
      </div>

    </div>
<div className="b2" style={{textAlign:"center",padding:"10vh 2vw"}}>
    <div className="con">
      <div className="column">
        <SignalCellularAltIcon style={IconStyle}  />
        <p className="about-icons">Profit Margin Expansion</p>
      </div>
      <div className="column">
        <MovingIcon style={IconStyle}  />
        <p className="about-icons">Improving Working Capital
</p>
      </div>
      <div className="column">
        <EngineeringIcon style={IconStyle}  />
        <p className="about-icons">Mitigating Supply Risk</p>
      </div>
    </div>
    <div className="con">
      <div className="column">
        <EmojiObjectsIcon style={IconStyle}  />
        <p className="about-icons">Innovating New Products</p>
      </div>
      <div className="column">
        <RuleIcon style={IconStyle}  />
        <p className="about-icons">Reduce Cost\Waste in the Process
</p>
      </div>
      <div className="column">
        <AddTaskIcon style={IconStyle}  />
        <p className="about-icons">Customer Driven Initiatives Creating values</p>
      </div>
    </div>
    </div>
    {/* <div className="b3 backgroundContainer">
      {/* Your content goes here 
    </div> */}
    </div>
  )
}

export default About