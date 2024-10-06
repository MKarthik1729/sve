import React from 'react'
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import CategoryIcon from '@mui/icons-material/Category';
import './funfacts.css'
function FunFacts() {
  return (
    <div className='facts'>
        <div className='ele'>
            <EngineeringIcon sx={{fontSize:50}} />
        </div>
        <div className='ele'>
            <FactoryIcon />
        </div>
        <div className='ele'>
            <CategoryIcon />
        </div>
    </div>
  )
}

export default FunFacts