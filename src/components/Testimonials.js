"use client";
import FillButton from "./FillButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimons from "./Testimons";

function Testimonials() {
  return (
    <div className="bg-scroll bg-[url('/testimonials1.avif')] sticky h-full   object-cover ">
      <div className="bg-scroll bg-black  py-20 bg-opacity-75">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Testimons />

          <div className="flex flex-col items-start justify-center mx-8 py-8">
            <h1 className="text-blue-500 uppercase text-xl font-semibold md:text-2xl">
              Testimonials
            </h1>
            <h2 className="text-white text-2xl md:text-6xl font-bold">
              What Client Says
            </h2>
            <p className="text-gray-400 text-lg py-4">
              "Our clients consistently praise the company for its high-quality
              services, knowledgeable staff, and commitment to customer
              satisfaction. Many clients say that they are impressed by the
              company's ability to understand their needs and provide tailored
              solutions.{" "}
            </p>
            <p className="text-gray-400 text-lg pb-4">
              They also appreciate the company's willingness to go above and
              beyond to ensure that their ICT systems are functioning optimally.
              Overall, clients are highly satisfied with Compulink Systems and
              would recommend it to others."
            </p>
            <FillButton name={"READ MORE"} link={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
