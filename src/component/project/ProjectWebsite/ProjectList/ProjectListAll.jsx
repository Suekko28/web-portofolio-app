import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectListAll() {
  return (
    <div className="project-list">
      <div className="mx-[32px] xl:mx-[120px] pt-32">
      <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          Website
        </h2>
        <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[16px] mx-auto" />
        <h6 className="text-base text-blue-dark text-center mb-[32px]">Explore a curated collection of my personal works and client projects.</h6>
        <ProjectListItem />
      </div>
    </div>
  );
}

export default ProjectListAll;
