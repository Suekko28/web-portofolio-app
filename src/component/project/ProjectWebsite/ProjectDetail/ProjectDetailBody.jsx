import React from "react";
import ProjectDetailHero from "./ProjectDetailHero";
import { Carousel } from "@material-tailwind/react";

function ProjectDetailBody() {
  return (
    <div className="project-detail-body">
      <ProjectDetailHero />
      <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] custome_margin">
        <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          Preview
        </h2>
        <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
        <div className="video mb-32">
          <iframe
            src="/src/assets/video/jejakkebahagiaan-preview.mp4"
            frameborder="0" className="w-full mx-auto h-screen rounded-3xl"
          ></iframe>
        </div>
        <Carousel className="rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>{" "}
      </div>
    </div>
  );
}

export default ProjectDetailBody;
