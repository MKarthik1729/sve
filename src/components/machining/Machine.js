import React from 'react'
import '../../App.css'
function Machine({mach}) {
    
  return (
    <div className='control'>
        <img style={{width:"28vw"}}
        src={mach.img} />
        <h3>{mach.title}</h3>
        <div className='div-center'>
            
        <table >
            <tr>
                <th>Type</th>
                <td>{mach.type}</td>
            </tr>
            <tr>
                <th>Make</th>
                <td>{mach.make}</td>
            </tr>
            <tr>
                <th>quantity</th>
                <td>{mach.quantity}</td>
            </tr>
            <tr>
                <th>X Axis (MAX DIA)</th>
                <td>{mach.xmm}mm, {mach.xinch}inch</td>
            </tr>
            <tr>
                <th>Y Axis</th>
                <td>{mach.ymm}mm, {mach.yinch}inch</td>
            </tr>
            <tr>
                <th>Z Axis (MAX LENGTH)</th>
                <td>{mach.zmm}mm, {mach.zinch}inch</td>
            </tr>
        </table>
            </div>
    </div>
)
}

export default Machine