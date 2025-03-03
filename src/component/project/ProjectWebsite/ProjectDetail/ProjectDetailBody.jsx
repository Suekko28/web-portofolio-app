import React from "react";
import { useParams } from "react-router-dom";
import { getDataProject } from "../../../../utils/DataProject";
import ProjectDetailHero from "./ProjectDetailHero";

function ProjectDetailBody() {
  const { id } = useParams(); // Mengambil id dari URL
  const project = getDataProject().find((proj) => proj.id === parseInt(id)); // Mencari proyek berdasarkan ID

  if (!project) {
    return (
      <h2 className="text-center mt-10 text-red-500">Project not found</h2>
    );
  }

  return (
    <div className="project-detail-body">
      <ProjectDetailHero />

      <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] custome_margin">
        <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          {project.title}
        </h2>
        <p className="text-center">{project.description}</p>

        {/* Video Preview */}
        {project.video && (
          <div className="video mb-32">
            <video controls className="w-full mx-auto h-screen rounded-3xl">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Gallery */}
        <div className="gallery overflow-x-auto scrollbar-hide">
          <div className="grid grid-flow-col grid-rows-2 gap-4 snap-x snap-mandatory">
            {(Array.isArray(project.image)
              ? project.image
              : [project.image]
            ).map((image, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg min-w-[500px] h-60 snap-center"
              >
                <img
                  src={image}
                  alt={`Gallery ${project.title} ${index + 1}`}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailBody;
