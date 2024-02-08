import React from 'react'
import Machine from './Machine'
import machines from './machines.json'
function Equipment() {
  const chunks = [];
  for (let i = 0; i < machines.length; i += 3) {
    chunks.push(machines.slice(i, i + 3));
  }
  

  
  return (
    <div className='center'>
      <h3>Equipment</h3>

{
    chunks.map((chunk, index) => (
      <div key={index} className="flex">
        {chunk.map((mach, idx) => (
          <Machine key={idx} className='equal' mach={mach} />
        ))}
      </div>
    ))
}
    </div>
  )
}

export default Equipment