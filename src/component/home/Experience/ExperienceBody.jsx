import React from "react";

const getImageName = (imageURL) =>
  imageURL
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

    
function ExperienceBody({ title, imageURL, date, description }) {
  return (
    <div className="experience-body w-full min-h-[418px] mb-6 lg:mb-0">
      <div className="experience-image h-[201px] flex justify-center items-center">
        <img src={imageURL} alt={`Foto ${getImageName(imageURL)}`} />
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
