import React, { useState, useEffect, useCallback } from "react";
import { BriefcaseBusiness, FileBadge2, Github, User } from "lucide-react";
import { useLocation } from "react-router-dom";

function PortoNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const sections = ["about", "experiences", "works", "My-Repos"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <nav className="bg-blue-light border-gray-200 fixed w-full z-50 hidden md:block">
        <div className="max-w-screen md:mx-[120px] mx-[32px] h-[92px] flex items-center justify-between">
          <a href="/" className="font-bold text-blue-dark">
            Suekko
          </a>
          <ul className="flex space-x-6 font-semibold">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-sm ${
                    activeSection === section ? "text-blue-dark font-bold" : ""
                  } hover:text-blue-dark`}
                >
                  {section.replace("-", " ").charAt(0).toUpperCase() +
                    section.replace("-", " ").slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <div className="md:hidden w-full fixed bottom-0 inset-x-0 bg-white shadow-lg border-t border-gray-300 p-3 flex justify-around items-center text-gray-500 font-medium z-10">
        <button
          onClick={() => scrollToSection("about")}
          className={`flex flex-col items-center ${
            activeSection === "about" ? "text-blue-dark" : ""
          }`}
        >
          <User className="mx-auto" width={28} height={28} />
          <span className="text-xs">About</span>
        </button>
        <button
          onClick={() => scrollToSection("experiences")}
          className={`flex flex-col items-center ${
            activeSection === "experiences" ? "text-blue-dark" : ""
          }`}
        >
          <BriefcaseBusiness className="mx-auto" width={28} height={28} />
          <span className="text-xs">Experiences</span>
        </button>
        <button
          onClick={() => scrollToSection("works")}
          className={`flex flex-col items-center ${
            activeSection === "works" ? "text-blue-dark" : ""
          }`}
        >
          <FileBadge2 className="mx-auto" width={28} height={28} />
          <span className="text-xs">Works</span>
        </button>
        <button
          onClick={() => scrollToSection("my-repos")}
          className={`flex flex-col items-center ${
            activeSection === "my-repos" ? "text-blue-dark" : ""
          }`}
        >
          <Github className="mx-auto" width={28} height={28} />
          <span className="text-xs">My Repos</span>
        </button>
      </div>
    </div>
  );
}

export default PortoNavbar;