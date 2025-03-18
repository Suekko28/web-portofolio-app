import React from "react";
import ExperienceItem from "./ExperienceItem";

function ExperienceList() {
  return (
    <div className="experience-list" id="experiences">
      <div className="mt-64 md:mt-64 mx-[32px] xl:mx-[120px] custome_margin_experience_list">
        <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
          Experiences
        </h2>
        <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
        <ExperienceItem />
      </div>
    </div>
  );
}

export default ExperienceList;
