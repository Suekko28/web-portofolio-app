import React from "react";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";

class PortoApp extends React.Component {
  render() {
    return (
      <div>
        <PortoNavbar />
        <div className="h-dvw">
        <HeroSection /> 
        </div>
      </div>
    );
  }
}

export default PortoApp;
