import React, { useEffect } from "react";
import ProjectDetailBody from "./ProjectDetailBody";

function ProjectDetailSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className="project-detail-section mb-32">
      <ProjectDetailBody />
    </div>
  );
}

export default ProjectDetailSection;
