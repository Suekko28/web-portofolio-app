import React from "react";
import GalleryBody, { imageGallery } from "./GalleryBody"; 

function GalleryItem() {
  return (
    <div className="gallery-item">
      <div className=" w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[32px]">
        {imageGallery.map((imageURL, index) => (
          <GalleryBody key={index} imageURL={imageURL} />
        ))}
      </div>
    </div>
  );
}

export default GalleryItem;
