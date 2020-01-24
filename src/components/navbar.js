import React from 'react'
// import { useStateValue } from '.././state'
import './components.css'

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className="nav-buttons">
        <a href='#first-section'><div className="nav-link">About</div></a>
        <a href='#second-section'><div className="nav-link">Inquire</div></a>
        <a href='#third-section'><div className="nav-link">Gallery</div></a>
      </div>
    </div>
  )
}