import React from "react";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import pinterest from "../img/pinterest.png";

export default function FindUs() {
  return (
    <>
      <div className="find-bar">
        <div className="find-title">
          <h1>FIND US ON SOCIAL MEDIA</h1>
        </div>
        <div className="find-buttons">
          <a href="https://www.facebook.com/artebellaengraving"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="find-icon" src={facebook} alt="" />
            <p>FACEBOOK</p>
          </a>
          <a
            href="https://www.instagram.com/arte_bella_engraving/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="find-icon" src={instagram} alt="" />
            <p>INSTAGRAM</p>
          </a>
          <a
            href="https://www.pinterest.com/artebellaengraving"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="find-icon" src={pinterest} alt="" />
            <p>PINTEREST</p>
          </a>
        </div>
      </div>
    </>
  );
}
