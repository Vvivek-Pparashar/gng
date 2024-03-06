import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "./Gallery.css";
// import {SwiperClass } from "swiper/react"

// import required modules
import { Zoom, Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import hm1 from "../../../assets/un1.png";
import hm2 from "../../../assets/un2.png";
import hm3 from "../../../assets/un3.png";
import hm4 from "../../../assets/un4.jpg";
import hm5 from "../../../assets/un5.png";
import hm6 from "../../../assets/un6.jpg";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery" id="Gallery">
      <h2>GALLERY</h2>

      <div className="gallery-crausal">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          zoom={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Zoom, Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={hm6} />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="vive un1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vive un2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vive un3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vive un4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vive un5"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="vive un6"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
