import React from "react";
import "./index.css";
import "../src/components/components.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import CallUs from "./components/callus";
import FindUs from "./components/findus";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        <Banner />
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
