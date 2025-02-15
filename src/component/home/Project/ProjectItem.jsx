import React from "react";
import { getContentProject } from "../../../utils/DataHome";
import ProjectBody from "./ProjectBody";

function ProjectItem() {
  return (
    <div className="project-item flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-[32px]">
      {getContentProject().map((contentProject) => (
        <ProjectBody key={contentProject.id} {...contentProject} />
      ))}
    </div>
  );
}

export default ProjectItem;
