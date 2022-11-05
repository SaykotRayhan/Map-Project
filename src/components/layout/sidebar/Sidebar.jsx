import React from 'react'
import './Sidebar.scss'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ closeSidebar, openSidebarMenu }) => {
  return (
    <div className={`${openSidebarMenu ? '' : 'hide-sidebar'} sidebar-wrapper`}>
      <div className='flex justify-end close-btn' onClick={closeSidebar}>
        <FaTimes className='cursor-pointer text-gray-400' />
      </div>
      sidebar
    </div>
  )
}

export default Sidebar
