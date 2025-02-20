import React from "react";

// Daftar gambar gallery 
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

// Mengambil nama image dari DataHome
const getImageName = (imageURL) =>
  imageURL.split("/").pop().replace(/\.[^/.]+$/, "");

function GalleryBody({ imageURL }) {
  return (
    // Membuat parameter props imageURL 
    <div className="gallery-image mx-auto w-fit">
      <img src={imageURL} alt={`Foto ${getImageName(imageURL)}`} className="w-[250px] h-[250px]" />
    </div>
  );
}

export { imageGallery }; 
export default GalleryBody;
