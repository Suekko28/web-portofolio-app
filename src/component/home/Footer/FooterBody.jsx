import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FooterBody() {
  const linkNavbar = [
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Project", id: "project" },
    { name: "Gallery", id: "gallery" },
    { name: "Find Me", id: "findme" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="footer space-y-[64px]">
      <div className="flex flex-wrap gap-16 items-center w-full">
        {getContentSocialMedia().map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-full md:w-auto custome_link"
          >
            <h1 className="text-white font-semibold md:w-auto w-full">
              {link.name}
            </h1>
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-16 items-center w-full">
        {linkNavbar.map((link, index) => (
          <h1
            className="text-white md:w-auto w-full cursor-pointer"
            key={index}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </h1>
        ))}
      </div>
      <div className="copyright text-white font-base">&#169; 2025 Suekko</div>
    </div>
  );
}

export default FooterBody;
