import React from 'react'
import { useStateValue } from './state'
import Navbar from './components/navbar'
import Banner from './components/banner'
import './index.css'
import '../src/components/components.css'
import Primary from './components/primary'
import Secondary from './components/secondary'
import FindUs from './components/findus'

export default function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="App">
      <Banner />
      <div className="Main">
        <Navbar />
        <Primary />
        <FindUs />
        <Secondary />
      </div>
    </div>
  );
}