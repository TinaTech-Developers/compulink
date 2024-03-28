import React, { useState, useEffect } from "react";
import Image from "next/image";
import dateFormat from "dateformat";

function GalleryCard() {
  const GALLERY_URL = "/api/gallery-upload";
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(GALLERY_URL);
      const gallery = await response.json();
      setGallery(gallery.gallery);
    }
    fetchData();
  }, []);
  return (
    <>
      {gallery?.slice(0, 2).map((gallery) => (
        <div key={gallery._id} className="w-80 h-full border ">
          <Image
            src={gallery.imageUrl}
            height={400}
            width={500}
            alt=""
            className="w-80 h-56 object-cover"
          />
          <div className="p-2 ">
            <h1 className=" uppercase text-sm  font-semibold">
              Technology
              <hr className="border bg-blue-700 py-[0.8px] w-24" />
            </h1>
            <p className="text-2xl font-bold">{gallery.projectName}</p>
            <p className="text-ellipsis overflow-hidden py-2 text-gray-600 truncate">
              {gallery.description}
            </p>
            <p className="text-gray-700">
              By <span className="text-black">{gallery.company}</span> -{" "}
              {dateFormat(gallery.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GalleryCard;
