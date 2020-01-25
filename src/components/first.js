import React from "react";
import "./components.css";
import logo from "../img/logo.png";

export default function Primary() {
  return (
    <>
      <div id="first-section" className="first-section">
        <div className="one">
          <img src={logo} alt="" />
        </div>
        <div className="two">
          <div className="two-content">
            <h1>Sample content placeholder.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              necessitatibus voluptatum voluptates autem illum, voluptas neque
              magnam error doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptate nesciunt aliquid reprehenderit non veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
