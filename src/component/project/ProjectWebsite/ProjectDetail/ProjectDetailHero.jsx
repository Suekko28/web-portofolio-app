import React from "react";


function ProjectDetailHero () {

    return (
        <div className="project-hero">
            <div className="w-full h-[212px] bg-blue-default py-[64px] px-[120px] mt-32 mb-32">
                <div className="flex justify-center gap-[16px]">
                    <img src="/src/assets/images/github.png" alt="" />
                    <img src="/src/assets/images/web.png" alt="" />
                </div>
                <h1 className="title text-center font-bold text-blue-dark mt-[12px] text-[32px]">Jejak Kebahagiaan</h1>
            </div>
        </div>
    );
}

export default ProjectDetailHero;