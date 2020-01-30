import React from 'react';
import man from '../img/man.png'
import woman from '../img/woman.png'

export default function MeetUs() {
  return (
    <>
      <div id='meetus-section' className="meetus-section">
        <h1 className="section-title">Meet the team</h1>
        <div className="meetus-team">
          <div className="meetus-one">
            <img src={man} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
              sint vitae quod non saepe illum magnam iure doloremque quam, qui id tempora natus molestias.
              Quod minima deleniti aliquid reprehenderit deserunt!
          </p>
          </div>
          <div className="meetus-two">
            <img src={woman} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
              sint vitae quod non saepe illum magnam iure doloremque quam, qui id tempora natus molestias.
              Quod minima deleniti aliquid reprehenderit deserunt!
          </p>
          </div>
        </div>
      </div>
    </>
  );
}