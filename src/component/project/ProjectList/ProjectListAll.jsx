import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectListAll() {
  return (
    <div className="project-list">
      <div className="mt-32 md:mt-64 mx-[32px] xl:mx-[120px]">
        <ProjectListItem />
      </div>
    </div>
  );
}

export default ProjectListAll;
