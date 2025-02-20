import React from "react";
import ExperienceList from "./home/Experience/ExperienceList";
import FindMeSection from "./home/FindMe/FindMeSection";
import FooterSection from "./home/Footer/FooterSection";
import GalleryList from "./home/Gallery/GalleryList";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";
import ProjectList from "./home/Project/ProjectList";
import ProjectListAll from "./project/ProjectList/ProjectListAll";

class PortoApp extends React.Component {

  render() {
    return (
      <div>
        <PortoNavbar />
        <div className="h-full">
        <HeroSection /> 
        <ExperienceList />
        <ProjectList />
        <GalleryList />
        <FindMeSection />
        <FooterSection />
        <ProjectListAll />
        </div>
      </div>
    );
  }
}

export default PortoApp;
