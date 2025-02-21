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
      <div className="rounded-3xl p-[32px] hover:bg-blue-light transition-all duration-300 ease-in-out group ">
        <div className="flex flex-wrap space-y-[32px] gap-[32px] justify-center md:flex-nowrap">
          <div className="image-project w-full">
            <img src={image} alt={`Foto ${getImageName(image)}`} className="w-full" />
          </div>
          <div className="content-project w-full space-y-[12px]">
            <h1 className="title font-bold text-blue-dark text-xl">{title}</h1>
            <h1 className="date text-xs font-light">{date}</h1>
            <p className="text-sm font-normal md:h-[190px] sm:h-24 ">{description}</p>
            <a href="" className="text-base p-[10px] border rounded-lg group-hover:bg-blue-dark group-hover:text-white transition-all duration-300 ease-in-out">View Detail</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectListBody;
