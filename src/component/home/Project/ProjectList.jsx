import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  return (
    <div className="project-list">
      <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] overflow-hidden custome_margin">
        <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          Project
        </h2>
        <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectList;
