import React from "react";
import { getContentSocialMedia } from "../../../utils/DataHome";

function FindMeButton() {
  return (
    <div className="find-me-button flex flex-wrap gap-[32px] justify-center">
      {getContentSocialMedia().map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className={`button w-[303px] h-[100px] flex items-center justify-center rounded-3xl
            ${
              item.color === "--color-blue-linkedin"
                ? "transition duration-300 ease-in-out transform hover:scale-109"
                : item.color === "--color-black-github"
                ? "transition duration-300 ease-in-out transform hover:scale-109"
                : "transition duration-300 ease-in-out transform hover:scale-109"
            }`}
          style={{ backgroundColor: `var(${item.color})` }}
        >
          <img src={item.img} alt={item.url} className="image_find_me" />
        </a>
      ))}
    </div>
  );
}

export default FindMeButton;
