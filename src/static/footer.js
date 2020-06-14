import React from 'react'

import mainWhiteLogo from '../images/main-white-logo.png'

const Footer = () => {
  return (
    <>
      <main>
        <section>
          <img className="logo" src={mainWhiteLogo} alt="" />
        </section>
        <section className="licensing">
          <h3>Licensing:</h3>
          <p>License #: ???</p>
          <p>Expiration: ???</p>
        </section>
        <section>
          <h3>Personal Contact</h3>
          <p>(714) 317-3006</p>
          <p>artebellaengraving@yahoo.com</p>
        </section>
        <section>
          <h3>Social Media</h3>
          <p><a
            href="https://www.facebook.com/Keith-Phillingane-Construction-101436348048975/"
            target="_blank"
            rel="noopener noreferrer">
            Facebook
            </a></p>
          <p><a href="https://www.instagram.com/keithphillinganeconstruction/"
            target="_blank"
            rel="noopener noreferrer">
            Instagram
            </a></p>
          <p><a href="https://www.pinterest.com/artebellaengraving"
            target="_blank"
            rel="noopener noreferrer">
            Pinterest
            </a></p>
        </section>
      </main>
      <p className="rights">© 2020 Arte Bella Engraving. | All rights reserved</p>
    </>
  )
}

export default Footer
