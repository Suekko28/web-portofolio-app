import React from "react";
import { getDataWebsite } from "../../../../utils/DataProject";
import ProjectListBody from "./ProjectListBody";

function ProjectListItem() {
  return (
    <div className="project-list-item">
      {getDataWebsite().map((project) => (
        <ProjectListBody
          key={project.id}
          id={project.id}
          {...project}
          image={
            Array.isArray(project.image) ? project.image[0] : project.image
          }
        />
      ))}
    </div>
  );
}

export default ProjectListItem;
