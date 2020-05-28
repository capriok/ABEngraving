import React from "react";
import "./components.css";
import logo from "../img/logo.png";

export default function Greeting() {
  return (
    <>
      <div id="greeting-section" className="greeting-section">
        <div className="one">
          <img src={logo} alt="" />
        </div>
        <div className="two">
          <div className="two-content">
            <h1>Arte Bella Engraving</h1>
            <p>
              Arte Bella Engraving provides custom engraving services of etched glass
              and wood for all occasions. Glass engraving is a form of decorative glasswork
              that involves engraving a glass surface or object. Glass etching comprises
              the techniques of creating art on the surface of glass by applying acidic,
              caustic, or abrasive substances.
            </p>
            <p>
              We specialize in Abrasive blasting, more commonly known as sandblasting.
              It is the operation of forcibly propelling a stream of abrasive material
              against a surface under high pressure. Custom engraved glass, wood, etc.
              for Anniversaries and Birthdays to Team Awards and Weddings. We have the
              perfect gift to suit your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
