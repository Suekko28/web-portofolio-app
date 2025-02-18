import React from "react";
import FindMeButton from "./FindMeButton";

function FindMeBody() {
  return (
    <div>
      <div className="find-me-body">
        <div className="flex flex-nowrap justify-start gap-[64px] items-center">
          <h1 className="font-bold text-blue-dark text-[64px] md:w-[163px] md:h-[192px]">FIND ME!</h1>
          <FindMeButton />
        </div>
      </div>
    </div>
  );
}

export default FindMeBody;
