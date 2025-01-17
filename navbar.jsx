import React from 'react'
import Image from './CAT-LOGO.png'
import './navbar.css'

function Navbar() {
  return (
    <div className='nav'>
    <nav>
      <img src={Image} alt="Cat Logo" className='img'/>
    </nav>
      <h2>"Love is a purr that warms the soul." 🐾❤️ </h2>
    </div>
  )
}

export default Navbar
