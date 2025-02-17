import React from "react";
import ExperienceList from "./home/Experience/ExperienceList";
import GalleryBody from "./home/Gallery/GalleryBody";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";
import ProjectList from "./home/Project/ProjectList";

class PortoApp extends React.Component {

  render() {
    return (
      <div>
        <PortoNavbar />
        <div className="h-full">
        <HeroSection /> 
        <ExperienceList />
        <ProjectList />
        {/* <GalleryBody /> */}
        </div>
      </div>
    );
  }
}

export default PortoApp;
