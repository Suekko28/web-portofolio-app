import React from "react";
import HeroBody from "./HeroBody";

function HeroSection() {
  return (
    <div className="hero-section" id="about">
      <div className="w-full bg-blue-default h-[1050px] lg:h-[579px] pt-32">
        <HeroBody />
      </div>
    </div>
  );
}

export default HeroSection;
