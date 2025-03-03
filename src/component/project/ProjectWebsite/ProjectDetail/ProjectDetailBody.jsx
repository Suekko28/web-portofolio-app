import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getDataProject } from "../../../../utils/DataProject";
import ProjectDetailHero from "./ProjectDetailHero";

function ProjectDetailBody() {
  const { title } = useParams(); // Mengambil title dari URL
  const project = getDataProject().find((proj) => proj.title === title); // Mencari proyek berdasarkan ID

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-detail-body">
      <ProjectDetailHero project={project} />
      <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] mb-32 custome_margin">
        <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          Intorduce
        </h2>
        <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
        <p className="text-center mb-6">{project.description}</p>

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
        <div className="gallery">
          <div className="grid grid-flow-col grid-rows-2 gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide p-6 bg-blue-light rounded-3xl">
            {(Array.isArray(project.image)
              ? project.image
              : [project.image]
            ).map((image, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg min-w-[500px] h-60 snap-center"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
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

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={(Array.isArray(project.image)
              ? project.image
              : [project.image]
            ).map((img) => ({ src: img }))}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectDetailBody;
