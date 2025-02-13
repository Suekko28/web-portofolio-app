import React from "react";

// Daftar gambar logo
const imageLogos = [
  "/src/assets/images/logo-html.png",
  "/src/assets/images/logo-css.png",
  "/src/assets/images/logo-ai.png",
  "/src/assets/images/logo-ps.png",
  "/src/assets/images/logo-corel.png",
  "/src/assets/images/logo-sql.png",
  "/src/assets/images/logo-figma.png",
  "/src/assets/images/logo-laravel.png",
  "/src/assets/images/logo-js.png",
  "/src/assets/images/logo-react.png",
];

const LogoRow = ({ logos }) => {
  return (
    <div className="flex justify-center items-center space-x-12">
      {logos.map((src, index) => (
        <div key={index} className="logo">
          <img src={src} alt={`Logo ${index + 1}`} className="imageLogo" />
        </div>
      ))}
    </div>
  );
};

function HeroSkills() {
  return (
    <div className="heroSkills">
      <div className="absolute w-[500px] h-[196px] md:w-[736px] md:h-[196px] bg-blue-default left-1/2 -translate-x-1/2 mt-3 px-[32px] py-[24px] md:px-[120px] md:py-[24px] rounded-xl custome_skills_width">
        <div className="space-y-6">
          <LogoRow logos={imageLogos.slice(0, 5)} />
          <LogoRow logos={imageLogos.slice(5, 10)} />
        </div>
      </div>
    </div>
  );
}

export default HeroSkills;
