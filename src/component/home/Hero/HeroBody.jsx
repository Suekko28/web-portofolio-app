import React from "react";
import HeroButton from "./HeroButton";
import HeroSkills from "./HeroSkills";

function HeroBody() {
  return (
    <div className="hero-body">
      <div className="flex mx-[32px] justify-center items-center lg:flex-nowrap sm:flex-wrap xl:mx-[120px] custome_content_flex">
        <div className="description w-full">
          <div className="custome_content_width w-lg mx-auto text-center lg:w-xl lg:text-left lg:mx-0">
            <h1 className="text-blue-dark font-normal text-[32px]">
              Hello, i'm
            </h1>
            <h1 className="text-[64px] font-bold custome_content_name">
              Aldi Dharmawan
            </h1>
            <div className="space-y-3">
              <p className="font-light text-gray-900">Junior Web Developer</p>
              <hr className="w-full xl:w-1/2 h-1 bg-blue-divider rounded" />
              <p className="font-light text-gray-900 text-justify">
                Experienced Web Developer specializing in Laravel, MySQL, and
                React.js. Skilled in building dynamic and responsive web
                applications, managing complex databases, and optimizing
                performance. Passionate about problem-solving, client-driven
                development, and implementing modern technologies to create
                high-quality digital solutions.
              </p>
              <HeroButton />
            </div>
          </div>
        </div>
        <div className="profile w-full">
          <img
            src="/assets/images/profile.png"
            alt="Profile"
            className="mx-auto mt-12 lg:mx-0 lg:ml-auto lg:mt-0 relative top-[-20px]"
          />
        </div>
      </div>
      <HeroSkills />
    </div>
  );
}

export default HeroBody;
