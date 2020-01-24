import React, {useState} from 'react';
import wood1 from '../img/wood1.jpg'
import wood2 from '../img/wood2.jpg'
import wood3 from '../img/wood3.jpg'
import glass1 from '../img/glass1.jpg'
import glass2 from '../img/glass2.jpg'
import glass3 from '../img/glass3.jpg'
import left from '../img/left-arrow.png'
import right from '../img/right-arrow.png'

export default function Third() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(3)
  const images = [glass1, glass2, glass3, wood1, wood2, wood3]

  const slideLeft =  () => {
    if (start != 0){
      setStart(images.length -3)
      setEnd(images.length)
    }
  }
  const slideRight =  () => {
    if (end >= images.length) {
    setStart(start +3)
    setEnd(end +3) 
    }
  }

  return (
    <>
    <div  id="third-section" className="third-section">
        <h1 className="gallery-title">
          Gallery
        </h1>
      <div className="gallery-main">
          <img src={left} className="gal-left" onClick={slideLeft} />
        <div className="gallery-content">
          {images.splice(start, end).map((img) => (
            <img src={img} alt=""/>
          ))}
        </div>
        <img src={right} className="gal-right" onClick={slideRight} />
      </div>
    </div>
    </>
  );
}
