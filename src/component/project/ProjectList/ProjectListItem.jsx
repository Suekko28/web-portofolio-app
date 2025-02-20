import React from "react";
import { getDataProject } from "../../../utils/DataProject";
import ProjectListBody from "./ProjectListBody";

function ProjectListItem() {
  return (
    <div className="project-list-item">
      {getDataProject().map((project) => (
        <ProjectListBody key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListItem;
