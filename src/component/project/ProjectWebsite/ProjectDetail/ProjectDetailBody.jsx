import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getDataWebsite } from "../../../../utils/DataProject";
import ProjectDetailHero from "./ProjectDetailHero";

function ProjectDetailBody() {
  const { slug } = useParams(); // Mengambil title dari URL
  const project = useMemo(() =>
    getDataWebsite().find((proj) => proj.slug === slug)
  ); // Mencari proyek berdasarkan slug

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  const openLightbox = (index, images) => {
    setSlides(images.map((img) => ({ src: img }))); // Set gambar untuk lightbox
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="project-detail-body">
      <ProjectDetailHero project={project} />
      <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] mb-32 custome_margin">
        {/* Video Section */}
        <section id="Video">
          <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
            Introduce
          </h2>
          <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
          <p className="text-justify mb-6 leading-7 text-gray-900">
            {project.description}
          </p>

          {/* Video Preview */}
          {project.video && (
            <div className="video mb-32">
              <video controls className="w-full mx-auto rounded-3xl">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </section>

        {/* Module Section */}
        <section id="Module">
          <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
            Module
          </h2>
          <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
          {Array.isArray(project.module) && project.module.length > 0 && (
            <>
              {project.module.map((mod, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 text-blue-dark">
                    {mod.title}
                  </h2>
                  <p className="text-gray-900 leading-7">{mod.description}</p>

                  {/* Menampilkan gambar jika ada */}
                  {Array.isArray(mod.image) && mod.image.length > 0 && (
                    <div className="overflow-x-auto md:h-auto sm:h-82">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-6 bg-blue-light rounded-3xl">
                        {mod.image.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${mod.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => openLightbox(imgIndex, mod.image)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Tools Section */}
          <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
            Built With Cutting-Edge Technology
          </h2>
          <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
          <p className="text-center text-gray-700 mb-6">
            These are the tools and technologies we used to bring this project
            to life.
          </p>
          <div className="tools flex flex-wrap gap-6 justify-center">
            {project.tools?.length > 0 &&
              project.tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool}
                  alt={`Tool ${index + 1}`}
                  className="h-8 w-auto"
                />
              ))}
          </div>
        </section>
      </div>

      {/* Lightbox untuk semua gambar */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
        />
      )}
    </div>
  );
}

export default ProjectDetailBody;
