import React from 'react'

import fbIcon from '../images/fb-icon.png'
import igIcon from '../images/ig-icon.png'
import ptIcon from '../images/pt-icon.png'

const Contact = ({ inquiryState, setInquiryState }) => {
  return (
    <>
      <div className="contact-cont">
        <div className="personal">
          <h1>Personal Contact</h1>
          <div className="number">
            <p>(714) 317-3006</p>
          </div>
          <div className="email" onClick={() => setInquiryState({ ...inquiryState, open: true })}>
            <p>Send us an email</p>
          </div>
        </div>
        <div className="socials">
          <h1>Social Media</h1>
          <div className="icons">
            <a href="https://www.facebook.com/artebellaengraving"
              target="_blank"
              rel="noopener noreferrer">
              <img src={fbIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/arte_bella_engraving"
              target="_blank"
              rel="noopener noreferrer">
              <img src={igIcon} alt="" />
            </a>
            <a href="https://www.pinterest.com/artebellaengraving"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ptIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
