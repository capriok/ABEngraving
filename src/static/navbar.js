import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false)

  useScrollPosition(({ currPos }) => {
    const isShow = currPos.y < -50
    if (isShow !== isScrolled) setScrolled(isShow)
  }, [isScrolled])

  return (
    <>
      <header className={isScrolled ? "scrolled navbar" : "navbar"}>
        <div className="nav-cont">
          <h1 className="title"><a href="#">Arte Bella Engraving</a></h1>
          <div className="actions">
            <a href="#Mission">Mission</a>
            <a href="#Services">Services</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Testimonials">Testimonials</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
