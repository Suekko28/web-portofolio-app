import React from "react";

// Daftar gambar logo
const imageLogos = [
  "/assets/images/logo-html.png",
  "/assets/images/logo-css.png",
  "/assets/images/logo-ps.png",
  "/assets/images/logo-sql.png",
  "/assets/images/logo-figma.png",
  "/assets/images/logo-laravel.png",
  "/assets/images/logo-js.png",
  "/assets/images/logo-react.png",
];

//Mengambil data gambar 
const LogoRow = ({ logos }) => {
  return (
    <div className="flex justify-center items-center space-x-12">
      {logos.map((src, index) => {
        const fileName = src
          .split("/")
          .pop()
          .replace(/\.[^/.]+$/, "");
        return (
          <div key={index} className="logo">
            <img src={src} alt={`${fileName}`} className="imageLogo" />
          </div>
        );
      })}
    </div>
  );
};

function HeroSkills() {
  return (
    <div className="hero-skills">
      <div className="absolute w-[500px] h-[196px] md:w-[736px] md:h-[196px] bg-blue-light left-1/2 -translate-x-1/2 mt-3 px-[32px] py-[24px] md:px-[120px] md:py-[24px] rounded-xl custome_skills_width">
        <div className="space-y-6">
          <LogoRow logos={imageLogos.slice(0, 4 )} />
          <LogoRow logos={imageLogos.slice(4, 9)} />
        </div>
      </div>
    </div>
  );
}

export default HeroSkills;
