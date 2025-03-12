import React from "react";
import FindMeButton from "./FindMeButton";

function FindMeBody() {
  return (
    <div className="findme-body">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 px-5">
        <div className="text-center md:text-left md:w-1/2 px-5">
          <h2 className="text-4xl font-bold text-blue-dark">
            Check Out My Repos!
          </h2>
          <p className="text-gray-900 mt-3">
            Browse through my projects and contributions on GitHub.
          </p>
        </div>
        <FindMeButton />
      </div>
    </div>
  );
}

export default FindMeBody;
