import React from "react";
import GalleryBody, { imageGallery } from "./GalleryBody";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function GalleryItem() {
  return (
    <div className="gallery-item">
      {/* Swiper untuk tampilan mobile (sm) */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {imageGallery.map((imageURL, index) => (
            <SwiperSlide key={index}>
              <GalleryBody imageURL={imageURL} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid untuk tampilan tablet & desktop (md, lg) */}
      <div className="hidden md:grid w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[32px]">
        {imageGallery.map((imageURL, index) => (
          <GalleryBody key={index} imageURL={imageURL} />
        ))}
      </div>
    </div>
  );
}

export default GalleryItem;
