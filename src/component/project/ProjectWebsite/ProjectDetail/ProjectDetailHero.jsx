import React from "react";

function ProjectDetailHero({ project }) {
  return (
    <div className="project-hero">
      <div className="py-32 bg-blue-light">
        <div className="w-full h-auto px-[120px]">
          <div className="flex justify-center gap-[16px]">
            {project.link_github && (
              <a
                href={project.link_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/src/assets/images/github.png" alt="GitHub" />
              </a>
            )}
            {project.link_website && (
              <a
                href={project.link_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/src/assets/images/web.png" alt="Website" />
              </a>
            )}
          </div>
        </div>
        <h1 className="title text-center font-bold text-blue-dark mt-[12px] text-[32px]">
          {project.title}
        </h1>
        <h6 className="text-center text-xs">{project.date}</h6>
      </div>
    </div>
  );
}

export default ProjectDetailHero;
