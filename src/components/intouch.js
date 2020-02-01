import React from 'react';
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import pinterest from "../img/pinterest.png";

export default function Intouch() {
  return (
    <>
      <div id="intouch-section" className="intouch-section">
        <h1 className="section-title">Get in touch</h1>
        <div className="intouch-body">
          <div className="follow-float">
            <div className="follow-items">
              <div className="follow-button">
                <a href="https://www.facebook.com/artebellaengraving"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="" />
                  <span>Facebook</span>
                </a>
              </div>
              <div className="follow-button">
                <a
                  href="https://www.instagram.com/arte_bella_engraving/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                  <span>Instagram</span>
                </a>
              </div>
              <div className="follow-button">
                <a
                  href="https://www.pinterest.com/artebellaengraving"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pinterest} alt="" />
                  <span>Pinterest</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-float">
              <div className="contact-items">
                <p>Email: artebellaengraving@yahoo.com</p>
                <p>Phone: 714-317-3006</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
