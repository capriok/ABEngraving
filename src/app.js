import React from "react";
import "./index.css";
import "../src/components/components.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CallUs from "./components/callus";
import FindUs from "./components/findus";
import Greeting from "./components/greeting";
import Gallery from "./components/gallery";
import MeetUs from "./components/meetus";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        <Banner />
        <Navbar />
        <Greeting />
        <Gallery />
        <MeetUs />
        <CallUs />
        <FindUs />
        <Footer />
      </div>
    </div>
  );
}