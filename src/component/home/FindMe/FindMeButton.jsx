import React from "react";

const findMeData = [
  {
    img: "/src/assets/images/logo-linkedin.png",
    color: " --color-blue-linkedin",
    url: "https://www.linkedin.com/in/aldi-dharmawan-4b76a9221/",
  },
  {
    img: "/src/assets/images/logo-github.png",
    color: "--color-black-github",
    url: "https://github.com/Suekko28",
  },
  {
    img: "/src/assets/images/logo-instagram.png",
    color: "--color-purple-instagram",
    url: "https://www.instagram.com/dhrmwnaldi_/",
  },
];

function FindMeButton() {
  return (
    <div className="find-me-button flex flex-wrap gap-[32px] justify-center">
      {findMeData.map((item, index) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <button
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
            <img src={item.img} alt="" className="image_find_me" />
          </button>
        </a>
      ))}
    </div>
  );
}

export default FindMeButton;
