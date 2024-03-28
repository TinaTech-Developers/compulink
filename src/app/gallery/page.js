"use client";
import FillButton from "@/components/FillButton";
import GalleryCard from "@/components/GalleryCard";
import GalleryCard1 from "@/components/GalleryCard1";
import Heroz from "@/components/Heroz";
import Layout from "@/components/Layout";
import React from "react";

function Gallery() {
  return (
    <Layout>
      <Heroz text={"Our Gallery"} />

      <div className="grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="p-10 col-span-1">
          <h1 className="text-6xl uppercase font-semibold text-blue-900">
            Latest <br />
          </h1>
          <span className="text-3xl uppercase font-semibold text-blue-900">
            Technologies
          </span>
          <p className="text-gray-700 py-4">
            Delivering unmatched service is what we live for. We create a
            culture of care and service where our customer comes first. .
          </p>
        </div>
        <div className="col-span-2 gap-6 ">
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <GalleryCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-wrap items-center justify-center gap-10 py-10  ">
        <GalleryCard1 />

        <div className="py-10">
          <FillButton name={"View More"} link={""} />
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
