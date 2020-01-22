import React from 'react'
import { useStateValue } from '.././state'
import './components.css'

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className="nav-buttons">
        <div className="nav-link">About</div>
        <div className="nav-link">Inquire</div>
        <div className="nav-link">Products</div>
      </div>
    </div>
  )
}
