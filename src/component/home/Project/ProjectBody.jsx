import React from "react";

const getImageName = (imageURL) =>
  imageURL
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

function ProjectBody({ imageURL, title, description, bgColor }) {
  return (
    <div className="project-body w-full">
      <a href="">
        <div
          className={`card h-auto mb-6 lg:mb-0 rounded-3xl p-4 text-white transition duration-300 ease-in-out transform shadow-lg hover:shadow-blue-card/50 bg-blue-card
          ${
            bgColor === "--color-orange-card"
            ? "hover:shadow-lg hover:shadow-orange-card/50"
            : bgColor === "--color-blue-card"
            ? "hover:shadow-lg hover:shadow-blue-card/50"
            : "hover:shadow-lg hover:shadow-red-card/50"
          }`}
          style={{ backgroundColor: `var(${bgColor})` }}
        >
          <div className="flex justify-between space-x-3 p-[16px]">
            <div className="image w-[65px] h-[150px]">
              <img
                src={imageURL}
                alt={`Foto ${getImageName(imageURL)}`}
                className="w-[45px] h-[45px] object-cover rounded-xs"
              />
            </div>
            <div className="content w-full">
              <h1 className="title font-2xl text-white font-bold">{title}</h1>
              <p className="description text-sm font-light text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectBody;
