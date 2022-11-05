import React from 'react'
import './Layout.scss'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Layout = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false)
  const closeSidebar = () => {
    console.log('closed')
    setOpenSidebarMenu(false)
  }
  const openSidebar = () => {
    console.log('open')
    setOpenSidebarMenu(true)
  }
  return (
    <>
      <Navbar openSidebar={openSidebar} />
      <div className='flex sidebar-dashboard-wrapper'>
        <Sidebar
          closeSidebar={closeSidebar}
          openSidebarMenu={openSidebarMenu}
        />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
