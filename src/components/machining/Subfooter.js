import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import IconButton from '@mui/material/IconButton';
// import Link from "react-router-dom";/

import '../../App.css'
function Subfooter() {
  const IconStyle = {
    fontSize:"150px",
    backgroundColor:"white",
    padding:"20px",
    color:"red",
    borderRadius:"50%"
  }

  return (
    <div>
      <Outlet />
      <div className='b2 con' style={{ justifyContent: "space-around", padding: "2% 0",textAlign:"center" }}>
        <Link className='middle' to='quality'>
            <DoneAllIcon style={IconStyle}/>
          <p>Quality</p>
        </Link>
        <Link to='equipment' className='middle'>
          <PermDataSettingIcon style={IconStyle} />
          <p>Equipment</p>

        </Link>
        <Link className='middle' 
        to='material'
        // onClick={}
        >
          <ManageSearchIcon style={IconStyle} />
          <p>Material</p>

        </Link>
      </div>
    </div>
  )
}

export default Subfooter