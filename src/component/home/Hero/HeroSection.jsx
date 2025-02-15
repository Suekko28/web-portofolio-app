import React from "react";
import HeroBody from "./HeroBody";
import HeroSkills from "./HeroSkills";

function HeroSection() {
  return (
<div className="hero-section">
      <div className="w-full bg-blue-light h-[1050px] lg:h-[579px] pt-32">
        <HeroBody />
      </div>
    </div>
  );
}

export default HeroSection;
