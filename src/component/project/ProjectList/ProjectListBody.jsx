import React from "react";

// Mengambil nama image dari DataProject
const getImageName = (imageURL) =>
  imageURL
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

function ProjectListBody({ image, title, date, description }) {
  return (
    <div className="project-list-body ">
      <div className="rounded-3xl p-[32px] hover:bg-blue-light">
        <div className="flex space-y-[32px] gap-[32px] justify-center">
          <div className="image-project w-full">
            <img src={image} alt={`Foto ${getImageName(image)}`} />
          </div>
          <div className="content-project w-full space-y-[12px]">
            <h1 className="title font-bold text-blue-dark">{title}</h1>
            <h1 className="date text-xs font-light">{date}</h1>
            <p className="text-sm font-normal h-[190px]">{description}</p>
            <a href="">View Detail</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectListBody;
