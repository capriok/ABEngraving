import React, { useState } from "react";
import wood1 from "../img/wood1.jpg";
import wood2 from "../img/wood2.jpg";
import wood3 from "../img/wood3.jpg";
import glass2 from "../img/glass1.jpg";
import glass1 from "../img/glass2.jpg";
import glass3 from "../img/glass3.jpg";
import left from "../img/left-arrow.png";
import right from "../img/right-arrow.png";

export default function Third() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const images = [wood1, glass2, wood3, glass1, wood2, glass3];

  const slideLeft = () => {
    if (start !== 0) {
      setStart(start - 3);
      setEnd(end - 3);
    }
    if (start === 0) {
      setStart(3);
      setEnd(6);
    }
  };
  const slideRight = () => {
    if (end < 6) {
      setStart(start + 3);
      setEnd(end + 3);
    }
    if (end === 6) {
      setStart(0);
      setEnd(3);
    }
  };

  return (
    <>
      <div id="third-section" className="third-section">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-body">
          <img src={left} className="gal-left" onClick={slideLeft} alt="" />
          <div className="gallery-slides">
            {images.splice(start, end).map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>
          <img src={right} className="gal-right" onClick={slideRight} alt="" />
        </div>
        <div className="gallery-ender">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            temporibus in aliquid voluptatibus totam ipsam, facilis delectus
            placeat atque adipisci expedita fugiat laudantium quam itaque! Natus
            dicta eos explicabo a.
          </p>
        </div>
      </div>
    </>
  );
}
