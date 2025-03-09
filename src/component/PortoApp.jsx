import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperienceList from "./home/Experience/ExperienceList";
import FindMeSection from "./home/FindMe/FindMeSection";
import FooterSection from "./home/Footer/FooterSection";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";
import ProjectList from "./home/Project/ProjectList";
import ProjectDetailSection from "./project/ProjectWebsite/ProjectDetail/ProjectDetailSection";
import ProjectListWebsite from "./project/ProjectWebsite/ProjectList/ProjectListWebsite";

class PortoApp extends React.Component {
  render() {
    return (
      <Router>
        <PortoNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ExperienceList />
                {/* <ProjectListUIUX /> */}
                <ProjectList />
                {/* <GalleryList /> */}
                <FindMeSection />
              </>
            }
          />

          <Route path="/website-list" element={<ProjectListWebsite />} />
          <Route path="/:slug" element={<ProjectDetailSection />} />
        </Routes>
        <FooterSection />
      </Router>
    );
  }
}

export default PortoApp;
