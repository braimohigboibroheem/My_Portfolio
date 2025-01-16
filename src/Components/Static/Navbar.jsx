import React , { useRef, useState } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo2 from '../../assets/logo2.png'
 import underline from '../../assets/nav_underline.svg'
 import menu_open from '../../assets/menu_open.svg'
  import menu_close from '../../assets/menu_close.svg'




const Navbar = () => {
  const[ menu, setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = ()=>{menuRef.current.style.right="0"}
  const closeMenu = ()=>{menuRef.current.style.right="-350px"}

  return (
    <div className='navbar'>
    <img className='ibrahim' src={logo2} alt="" />
    <img  src={menu_open} onClick={openMenu}   alt="" className='nav-mob-open' />

  <ul ref={menuRef}  className='nav-menu'>
<img src={menu_close} onClick={closeMenu}  alt="" className="nav-mob-close" />
    <li> <AnchorLink  className='anchor-link' href="#home"> Home<img  src={underline} alt="" /><p onClick={()=>setMenu("home")}></p>   {menu==="home"?  <></> :<></> } </AnchorLink>  </li>


    <li><AnchorLink offset={50}  className='anchor-link' href="#about">About Me <img src={underline} alt="" /><p onClick={()=>setMenu("about")}></p> {menu === "about" ? <></> : <></>}
    </AnchorLink>  </li>

    <li><AnchorLink offset={50}  className='anchor-link' href="#services">Services<img src={underline} alt="" /><p onClick={()=>setMenu("services")}></p>  {menu==="services"?  <></>:<></> } </AnchorLink>   </li>

    <li><AnchorLink offset={50}  className='anchor-link' href="#work">Portfolio <img src={underline} alt="" />   <p onClick={()=>setMenu("work")}></p>  {menu==="work"? <></> :<></> } </AnchorLink></li>

    <li><AnchorLink offset={50}  className='anchor-link' href="#contact">Contact  <img src={underline} alt="" /><p onClick={()=>setMenu("contact")}></p>{menu==="contact"? <></> :<></>} </AnchorLink> </li>

  </ul>

  <div className="nav-connect"><AnchorLink offset={50}  className='anchor-link' href="#contact"> Connect with me </AnchorLink> </div>
  
    </div>
  )
}




export default Navbar


{/* ><img src={underline} alt="" /> */}

// const Header = () => {
//   const[ menu, setMenu] = useState("home")


    
  
//   )
// }

// export default Header