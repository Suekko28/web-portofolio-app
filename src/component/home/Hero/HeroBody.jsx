import React from "react";
import HeroButton from "./HeroButton";
import HeroSkills from "./HeroSkills";

function HeroBody() {
  return (
    <div className="HeroBody">
      <div className="flex mx-[120px] justify-center items-center">
        <div className="description w-full ">
          <div className="w-xl">
            <h1 className="text-blue-dark text-normal text-[32px]">
              Hello, i'm
            </h1>
            <h1 className="text-black text-[64px] text-semibold">
              Aldi Dharmawan
            </h1>
            <div className="space-y-3">
              <p className="text-extralight text-base">Tech Enthusiast</p>
              <hr className="w-1/2 h-1 bg-blue-divider rounded" />
              <p className="text-light">
                Informatics Engineering graduate from Gunadarma University with
                a background in Computer and Network Engineering. Skilled in Web
                Development, IT Support, and UI/UX design
              </p>
              <HeroButton />
            </div>
          </div>
        </div>
        <div className="profile w-full">
          <img
            src="/src/assets/images/profile-svg.svg"
            alt="Profile"
            className="ml-auto relative top-[-20px]"
          />
        </div>
      </div>
      <HeroSkills />
    </div>
  );
}

export default HeroBody;
