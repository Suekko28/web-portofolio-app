import React from "react";



function ExperienceBody({ title, date, description }) {
  return (
    // Membuat props berdasarkan DataHome
    <div className="experience-body w-full h-auto lg:mb-0">
      <h1 className="title text-xl font-bold text-blue-dark mt-[16px]">
        {title}
      </h1>
      <h6 className="date font-light text-xs">{date}</h6>
      <p className="description text-gray-900 text-sm text-justify leading-6">{description}</p>
    </div>
  );
}

export default ExperienceBody;
