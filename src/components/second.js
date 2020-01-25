import React from "react";
import abstract from "../img/abstract.jpg";

export default function Second() {
  return (
    <>
      <div id="second-section" className="first-section">
        <div className="one" style={{ order: 2 }}>
          <img src={abstract} style={{ width: "80%" }} alt="" />
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
