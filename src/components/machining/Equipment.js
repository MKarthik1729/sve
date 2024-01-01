import React from 'react'
import Machine from './Machine'

function Equipment() {
  const mach = {
    img: "https://succinnova.com/wp-content/uploads/2019/07/1-HAAS-VF2-include.png",
    title: "CNC Vertical Machining Centre",
    type: "VMC 4 Axis",
    make: "HAAS",
    quantity: "1",
    xmm: "762",
    xinch: "30",
    ymm: "406",
    yinch: "16",
    zmm: "508",
    zinch: "20"

  }
  return (
    <div className='center'>
      <h3>Equipment</h3>
      <div className='flex'>
        <Machine mach={mach} />
        <Machine mach={mach} />
        <Machine mach={mach} />
      </div>
      <div className='flex'>
        <Machine mach={mach} />
        <Machine mach={mach} />
        <Machine mach={mach} />
      </div>
      <div className='flex'>
        <Machine mach={mach} />
        <Machine mach={mach} />
        <Machine mach={mach} />
      </div>
    </div>
  )
}

export default Equipment