import React from 'react'
import './Navbar.scss'
import { logout } from '../../../services/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ openSidebar }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <nav className='flex justify-between items-center'>
      <div className='flex gap-10 items-center'>
        <div className='logo'>ISR</div>
        <div className='ham-icon' onClick={openSidebar}>
          <GiHamburgerMenu className='cursor-pointer' />
        </div>
      </div>

      <div className='cursor-pointer logout' onClick={handleLogout}>
        Logout
      </div>
    </nav>
  )
}

export default Header
