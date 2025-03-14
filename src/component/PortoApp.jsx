import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperienceList from "./home/Experience/ExperienceList";
import FindMeSection from "./home/FindMe/FindMeSection";
import FooterSection from "./home/Footer/FooterSection";
import HeroSection from "./home/Hero/HeroSection";
import PortoNavbar from "./home/Navbar/PortoNavbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ProjectList from "./home/Project/ProjectList";
import ProjectDetailSection from "./project/ProjectWebsite/ProjectDetail/ProjectDetailSection";

function PortoApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <DotLottieReact
              src="https://lottie.host/f41f48ad-c920-4cbf-b5ac-01033ac8fcf7/yJEmJ1vMXX.lottie"
              loop
              autoplay
            />{" "}
          </div>
        </div>
      ) : (
        <>
          <PortoNavbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ExperienceList />
                  <ProjectList />
                  <FindMeSection />
                </>
              }
            />
            <Route path="/:slug" element={<ProjectDetailSection />} />
          </Routes>
          <FooterSection />
        </>
      )}
    </Router>
  );
}

export default PortoApp;
