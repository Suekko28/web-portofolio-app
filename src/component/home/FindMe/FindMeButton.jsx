import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FindMeButton() {
  return (
    <div className="md:w-1/2 flex justify-center mt-5 md:mt-0">
      {getContentSocialMedia()
        .filter((item) => item.name === "Github")
        .map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            className="relative flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:rotate-1 group overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></span>

            <img
              src={item.img_footer}
              alt="GitHub"
              className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />

            <span className="relative">Visit My GitHub</span>
          </a>
        ))}
    </div>
  );
}

export default FindMeButton;
