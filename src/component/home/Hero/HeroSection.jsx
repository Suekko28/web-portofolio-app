import React from "react";
import HeroBody from "./HeroBody";
import HeroSkills from "./HeroSkills";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="w-auto bg-blue-light h-[579px] pt-32">
        <HeroBody />
      </div>
    </div>
  );
}

export default HeroSection;
