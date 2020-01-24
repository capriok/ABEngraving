import React from 'react';
import './components.css'
import logo from '../img/logo.jpg'

export default function Primary() {

  return (
    <>
      <div id="first-section" className="first-section">
        <div className="one" >
        <img src={logo} alt=""/>
        </div>
          <div className="two">
            <div className='two-content'>
              <h1>Sample content placeholder.</h1>
              <p>This is a brief greeting to the customer, reeling them in, featuring a product/service. This is a brief greeting to the customer, reeling them in, featuring a product/service</p>
              <p>The user will then explore the site farther and know what theyre exploring</p>
            </div> 
          </div>
      </div>
    </>
  );
}
