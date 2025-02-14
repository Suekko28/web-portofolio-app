import React from "react";
import { getContentExperience } from "../utils/data"
import ExperienceList from "./home/Experience/ExperienceList";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";

class PortoApp extends React.Component {

  render() {
    return (
      <div>
        <PortoNavbar />
        <div className="h-dvw">
        <HeroSection /> 
        <ExperienceList />
        </div>
      </div>
    );
  }
}

export default PortoApp;
