import React from 'react'

import introCover from '../images/intro-cover.jpg'
import mainLogo from '../images/main-logo.png'

const Intro = () => {
  return (
    <>
      <div className="intro-cont">
        <div className="intro-img">
          <img className="intro-logo" src={mainLogo} alt="" />
          {/* <p className="ccb">CCB# 228117</p> */}
        </div>
        {/* <div className="intro-body">
          <p>
            Arte Bella Engraving provides custom engraving services of etched glass
            and wood for all occasions. Glass engraving is a form of decorative
            glasswork that involves engraving a glass surface or object. Glass
            etching comprises the techniques of creating art on the surface of
            glass by applying acidic, caustic, or abrasive substances. We specialize
            in Abrasive blasting, more commonly known as sandblasting. It is the
            operation of forcibly propelling a stream of abrasive material against
            a surface under high pressure. Custom engraved glass, wood, etc. for
            Anniversaries and Birthdays to Team Awards and Weddings. We have the
            perfect gift to suit your needs.
            </p>
        </div> */}
      </div>
      <img className="intro-cover" src={introCover} alt="" />
    </>
  )
}

export default Intro