import React from 'react'
import NavScrollExample from './NavScrollExample'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <NavScrollExample />
        <Outlet />
    </div>
  )
}

export default Home