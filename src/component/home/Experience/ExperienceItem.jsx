import React from "react";
import { getContentExperience } from "../../../utils/DataHome";
import ExperienceBody from "./ExperienceBody";

function ExperienceItem() {
  return (
    <div className="experience-item">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-[32px]">
        {getContentExperience().map((experience) => (
          <ExperienceBody
            key={experience.id}
            title={experience.title}
            imageURL={experience.imageURL}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceItem;
