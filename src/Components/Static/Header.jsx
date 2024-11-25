import React from 'react'


import './Header.css'
import logo2 from '../../assets/logo2.png'



const Header = () => {
  return (
    <nav className='navbar'>
<img className='ibrahim' src={logo2} alt="" />
<ul className="nav-menu">
    <li>Home</li>
    <li>About Me</li>
    <li>Services</li>
    <li>Portfolio</li>
    <li>Contact</li>
</ul>
<div className="nav-connect">Connect with me</div>

    </nav>
    
  
  )
}

export default Header