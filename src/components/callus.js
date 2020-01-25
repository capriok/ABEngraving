import React from "react";
import contact from "../img/contact.png";

export default function CallUs() {
  return (
    <>
      <div className="call-bar">
        <img src={contact} alt="" />
        <div className="call-info">
          <h1>Email: artebellaengraving@yahoo.com</h1>
          <h1>Phone: 949-434-2534</h1>
        </div>
      </div>
    </>
  );
}
