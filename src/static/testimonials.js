import React from 'react'

import stars from '../images/stars.png'

const Testimonials = () => {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="testimonials-cont">
        <div>
          <header>
            <h3>Name Here</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima
              qui neque dignissimos exercitationem aliquam laboriosam possimus! Tempora,
              animi nihil iure ex soluta officia quas dolor vitae? Neque, esse vero.
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
        <div>
          <header>
            <h3>Name Here</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima
              qui neque dignissimos exercitationem aliquam laboriosam possimus! Tempora,
              animi nihil iure ex soluta officia quas dolor vitae? Neque, esse vero.
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
        <div>
          <header>
            <h3>Name Here</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima
              qui neque dignissimos exercitationem aliquam laboriosam possimus! Tempora,
              animi nihil iure ex soluta officia quas dolor vitae? Neque, esse vero.
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
      </div>
    </>
  )
}

export default Testimonials
