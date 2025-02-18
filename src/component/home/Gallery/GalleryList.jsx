import React from "react";
import GalleryItem from "./GalleryItem";

function GalleryList () {

    return (
        <div className="gallery-list">
        <div className="mt-32 md:mt-32 mx-[32px] xl:mx-[120px] custome_margin">
          <h2 className="text-2xl font-bold text-center mb-[16px] text-blue-dark">
            Gallery
          </h2>
          <hr className="h-2 bg-blue-divider rounded w-[64px] mb-[32px] mx-auto" />
          <GalleryItem />
        </div>
      </div>
    );
}

export default GalleryList;