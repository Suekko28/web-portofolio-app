import React from "react";
import { getContentProject } from "../../../utils/DataHome";
import ProjectBody from "./ProjectBody";

function ProjectItem() {
  return (
    // Mengambil data props dari project body
    <div className="project-item">
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-[32px]">
      {getContentProject().map((contentProject) => (
        <ProjectBody key={contentProject.id} {...contentProject} />
      ))}
    </div>
    </div>

  );
}

export default ProjectItem;
