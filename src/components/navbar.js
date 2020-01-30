import React from 'react'
// import { useStateValue } from '.././state'
import './components.css'

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className="nav-buttons">
        <a href='#greeting-section'><div className="nav-link">About</div></a>
        <a href='#gallery-section'><div className="nav-link">Gallery</div></a>
        <a href='#meetus-section'><div className="nav-link">Meet Us</div></a>
        <a href='#intouch-section'><div className="nav-link">Contact</div></a>
      </div>
    </div>
  )
}