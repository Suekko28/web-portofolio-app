import React from "react";

function ExperienceBody({ title, imageURL, date, description }) {
  return (
    <div className="experience-body w-full min-h-[418px]">
      <div className="experience-image h-[201px] flex justify-center items-center">
        <img src={imageURL} alt="Foto" className="" />
      </div>

      <h1 className="title text-xl font-bold text-blue-dark mt-[16px]">
        {title}
      </h1>
      <h6 className="date font-light text-xs">{date}</h6>
      <p className="description font-normal text-sm mt-[12px]">{description}</p>
    </div>
  );
}

export default ExperienceBody;
