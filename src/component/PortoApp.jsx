import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperienceList from "./home/Experience/ExperienceList";
import FindMeSection from "./home/FindMe/FindMeSection";
import FooterSection from "./home/Footer/FooterSection";
import GalleryList from "./home/Gallery/GalleryList";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";
import ProjectList from "./home/Project/ProjectList";
import ProjectDetailSection from "./project/ProjectWebsite/ProjectDetail/ProjectDetailSection";
import ProjectListUIUX from "./project/ProjectUIUX/ProjectList/ProjectListUIUX";
import ProjectListWebsite from "./project/ProjectWebsite/ProjectList/ProjectListWebsite";

class PortoApp extends React.Component {
  render() {
    return (
      <Router>
        {" "}
        {/* Pastikan Router membungkus semuanya */}
        <PortoNavbar /> {/* Navbar tetap tampil di semua halaman */}
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
          <Route path="/website-list/:slug" element={<ProjectDetailSection />} />
        </Routes>
        <FooterSection />
      </Router>
    );
  }
}

export default PortoApp;
