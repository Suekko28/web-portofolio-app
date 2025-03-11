import React from "react";
import FindMeBody from "./FindMeBody";

function FindMeSection() {
  return (
    <div className="find-me-section" id="My Repos">
      <div className="bg-blue-light">
        <div className="mt-32 mb-42 md:mt-32 mx-[32px] xl:mx-[120px] custome_margin">
          <FindMeBody />
        </div>
      </div>
    </div>
  );
}

export default FindMeSection;
