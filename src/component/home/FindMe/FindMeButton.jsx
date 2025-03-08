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
            className="flex items-center bg-blue-dark text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105"
          >
            <img src={item.img_footer} alt="GitHub" className="w-6 h-6 mr-2" />
            Visit My GitHub
          </a>
        ))}
    </div>
  );
}

export default FindMeButton;