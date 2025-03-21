import React from "react";
import { Link } from "react-router-dom";

// Mengambil nama image dari DataHome
// const getImageName = (image) =>
//   image
//     .split("/")
//     .pop()
//     .replace(/\.[^/.]+$/, "");

// Membuat parameter props berdasarkan DataProject
function ProjectBody({ image, title, date, description, slug }) {
  return (
    <div className="project-body w-full mb-12">
      <div className="project-image w-full flex justify-center">
        <img
          src={image}
          alt={`Foto ${title}`}
          className="w-full object-cover rounded-xl"
        />
      </div>

      <div className="content-project w-full flex flex-col flex-grow mt-[16px]">
        <h1 className="title font-bold text-blue-dark text-xl min-h-[32px]">
          {title}
        </h1>
        <h1 className="date text-xs font-light mb-3 ">{date}</h1>

        <p className="text-sm font-normal mb-6 line-clamp-3 text-justify leading-6 text-gray-900">
          {description}
        </p>
        <div className="flex justify-center">
          <Link
            to={`/${slug}`}
            className="flex items-center justify-center gap-2 text-base p-[10px] border border-blue-dark text-blue-dark rounded-lg hover:bg-blue-dark hover:text-white transition-all duration-300 ease-in-out w-full"
          >
            View Detail
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;
