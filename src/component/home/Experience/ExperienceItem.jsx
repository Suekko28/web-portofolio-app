import React from "react";
import { getContentExperience } from "../../../utils/data";
import ExperienceBody from "./ExperienceBody";

function ExperienceItem() {
  return (
    <div className="experience-item">
      <div className="flex justify-center items-center space-x-[32px]">
        {getContentExperience().map((experience) => (
            <ExperienceBody
              key={experience.id}
              title={experience.title}
              imageURL={experience.imageURL}
              date={experience.date}
              description={experience.description}
            />
        ))}
      </div>
    </div>
  );
}

export default ExperienceItem;
