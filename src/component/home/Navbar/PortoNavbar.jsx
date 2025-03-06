import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PortoNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const sections = ["about", "experience", "project", "findme"];

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
    handleScroll(); // Panggil saat pertama kali

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`; // Redirect ke home lalu scroll
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-blue-light border-gray-200 fixed w-full z-50">
      <div className="max-w-screen md:mx-[120px] mx-[32px] h-[92px] flex items-center justify-between">
        <a href="/" className="font-bold text-blue-dark">
          Suekko
        </a>
        <ul className="flex space-x-6 font-semibold">
          {["about", "experience", "project", "findme"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-sm ${
                    activeSection === section
                      ? "text-blue-dark font-bold"
                      : ""
                  } hover:text-blue-dark`}
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace("-", " ")}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default PortoNavbar;
