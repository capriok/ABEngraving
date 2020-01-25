import React from "react";
import contact from "../img/contact.png";

export default function CallUs() {
  return (
    <>
      <div className="call-bar">
        <img src={contact} alt="" />
        <div className="call-info">
          <p>Email: artebellaengraving@yahoo.com</p>
          <p>Phone: 949-434-2534</p>
        </div>
      </div>
    </>
  );
}
