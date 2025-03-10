import React from "react";
import { Globe } from "lucide-react";

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
                <img
                  src="/src/assets/images/github (2).png"
                  alt="GitHub"
                  width="32px"
                  height="32px"
                  className="transition ease-in-out hover:scale-120"
                />
              </a>
            )}
            {project.link_website && (
              <a
                href={project.link_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe
                  alt="Website"
                  className="transition ease-in-out hover:scale-120"
                  width={32}
                  height={32}
                />
              </a>
            )}
          </div>
        </div>
        <h1 className="title text-center font-bold text-blue-dark mt-[12px] text-[32px]">
          {project.title}
        </h1>
        <h6 className="text-center text-xs text-gray-900">{project.date}</h6>
      </div>
    </div>
  );
}

export default ProjectDetailHero;
