import React from "react";
import { Link } from "react-router-dom";

// Mengambil nama image dari DataProject
const getImageName = (imageURL) =>
  imageURL
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

function ProjectListBody({ image, title, date, description, slug }) {
  return (
    <div className="project-list-body ">
      <div className="card">
        <div className="rounded-3xl p-[32px] hover:bg-blue-light transition-all duration-300 ease-in-out group ">
          <div className="flex flex-wrap space-y-[32px] gap-[32px] justify-center md:flex-nowrap">
            <div className="image-project w-full">
              <img
                src={image}
                alt={`Foto ${getImageName(image)}`}
                className="w-full rounded-3xl h-full object-cover"
              />
            </div>
            <div className="content-project w-full space-y-[12px]">
              <h1 className="title font-bold text-blue-dark text-xl">
                {title}
              </h1>
              <h1 className="date text-xs font-light">{date}</h1>
              <p className="text-sm font-normal md:mb-[190px] sm:mb-32 custome_margin ">
                {description}
              </p>
              <Link
                to={`/website-list/${slug}`}
                className="text-base p-[10px] border border-blue-dark text-blue-dark rounded-lg group-hover:bg-blue-dark group-hover:text-white transition-all duration-300 ease-in-out "
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectListBody;
