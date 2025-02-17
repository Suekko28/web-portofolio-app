import React from "react";

const imageGallery = [
  "/src/assets/images/dimsum.png",
  "/src/assets/images/outfitguideidn.png",
  "/src/assets/images/metnav.png",
  "/src/assets/images/suekko.png",
  "/src/assets/images/pb-kalong.png",
  "/src/assets/images/warunk-risol.png",
  "/src/assets/images/ship-samudera.png",
  "/src/assets/images/truck-samudera.png",
  "/src/assets/images/ems.png",
];

const getImageName = (imageURL) =>
  imageURL
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

function GalleryBody() {
  return (
    <div className="gallery-image">
      {imageGallery.map((imageURL, index) => (
        <img 
        key={index}
        src={imageURL} 
        alt={`Foto ${getImageName(imageURL)}`}
         />
      ))}
      ;
    </div>
  );
}

export default GalleryBody;
