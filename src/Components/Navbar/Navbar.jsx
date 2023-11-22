import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo - nền trắng - ngang.png'
const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={logo}></img>
      </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login'>
            <button>Login</button>
            <button>Sign Up</button>
        </div>     
    </div>
  )
}

export default Navbar
