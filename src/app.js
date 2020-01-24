import React from 'react'
// import { useStateValue } from './state'
import './index.css'
import '../src/components/components.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import CallUs from './components/callus'
import FindUs from './components/findus'
import First from './components/first'
import Second from './components/second'
import Third from './components/third'
import Footer from './components/footer'

export default function App() {
  // const [,dispatch] = useStateValue()

  return (
    <div className="App">
      <Banner />
      <div className="Main">
        <Navbar />
        <First />
        <CallUs />
        <Second />
        <FindUs />
        <Third />
        <Footer />
      </div>
    </div>
  );
}