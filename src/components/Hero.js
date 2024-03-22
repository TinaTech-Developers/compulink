"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import Slide from "./Slide";
import Slid from "./Slid";
import Slidy from "./Slidy";

function Hero() {
  return (
    <div className="h-full w-full  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 15000 }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Slid />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Slidy />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
