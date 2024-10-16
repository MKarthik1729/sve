import React from 'react'
import '../App.css'
import IndividualIntervalsExample from './Landing/Images'
// import FunFacts from './Home/FunFacts'
function Sve() {

  const Welcome = {
    // padding: "1% 7%",
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/cnc.jpg' + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh', 
  }
  const Mission = {
    // padding: "1% 7%",  
    backgroundImage: "url(" + process.env.PUBLIC_URL + '/welcome.jpg' + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '90vh',   
    fontSize:'4vh'
  }

  return (
    <div>
      <IndividualIntervalsExample />
      {/* <div style={Welcome}>
        <div className="column">
          <div className="common">
            <h2>Welcome to </h2>
            <h2 className="srivelu">SRI VELU ENTERPRISES
            </h2>
           </div>
     
        </div>

      </div> */}
      {/* <div className='mission centered-text' style={Mission}>

      <p>Our mission is to revolutionize the manufacturing landscape by providing unparalleled CNC solutions that prioritize precision, efficiency, and innovation. We are dedicated to empowering our clients with cutting-edge technology, streamlining their production processes, and fostering a culture of continuous improvement. Through a commitment to reliability and excellence, we aim to be the go-to partner for manufacturers seeking to optimize their operations and stay ahead in a rapidly evolving industry. Our mission extends beyond delivering state-of-the-art CNC tools; it encompasses a vision of transforming businesses, fostering growth, and contributing to the advancement of industries worldwide through the seamless integration of our expertise and advanced technologies</p>
      </div> */}
      {/* <FunFacts /> */}
      <div className="b1 con center" style={{ padding: "10vh 10vw", backgroundSize: "cover" }}>

        <div className="centered-text">
          <h2 style={{ fontWeight: "500", fontSize: "50px" }}>Vision
          </h2><br />
          <p style={{ fontSize: '4vh' }}>At Sri Velu Enterprises, we envision a future where precision meets innovation, driving a transformative impact across industries. Our commitment is to empower manufacturers with advanced CNC solutions that redefine the possibilities of precision engineering. Through relentless pursuit of excellence and cutting-edge technology, we strive to be the driving force behind the evolution of manufacturing processes, setting new standards and inspiring a paradigm shift in how industries approach precision engineering. We see ourselves as catalysts for progress, seamlessly integrating automation and intelligence into manufacturing, ultimately enhancing efficiency, reducing errors, and propelling our clients towards unparalleled success. Our vision is to be at the forefront of the CNC industry, continuously pushing the boundaries of what is an achievable and delivering solution that not only meet but exceed the evolving needs of our clients.</p>

        </div>
      </div>

      <p style={{ padding: "20px 4vw", textAlign: 'center', fontSize: "20px" }}>Team SriveluEnterprises; takes pride in introducing the company as manufacturers of Precision Machined parts and services in the field of Global Supply Chain Management. Passionate team with techno-commercial expertise in manufacturing and services at global level established a culture driven platform benefitting allied organizations, society and associated individuals.</p>
    </div>
  )
}

export default Sve