import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FooterBody() {
  //   const linkSosmed = ["LinkedIn", "Github", "Instagram"];
  const linkNavbar = [
    "About Me",
    "Experiences",
    "Project",
    "Contact",
    "Gallery",
  ];

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
            <h1
              className="text-white font-semibold md:w-auto w-full"
              key={index}
            >
              {link.name}
            </h1>
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-16 items-center w-full">
        {linkNavbar.map((link, index) => (
          <h1 className="text-white md:w-auto w-full" key={index}>
            {link}
          </h1>
        ))}
      </div>
      <div className="copyright text-white font-base">&#169; 2025 Suekko</div>
    </div>
  );
}

export default FooterBody;
