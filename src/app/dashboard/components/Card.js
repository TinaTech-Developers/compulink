import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import dateFormat from "dateformat";
import RemoveBtn from "./RemoveBtn";

function Card() {
  const URL = "http://localhost:3000/api/gallery-upload";
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const gallery = await response.json();
      setGallery(gallery.gallery);
    }

    fetchData();
  }, []);

  console.log(gallery);

  return (
    <div className="w-[98%] mx-auto p-4 border rounded-lg bg-white overflow-y-auto mt-4">
      <div className="my-3 text-lg p-2 font-semibold grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer border-b-2">
        <span>Project Name</span>
        <span className="sm:text-left text-right">Uploaded Date</span>
        <span className="hidden md:grid">Company</span>
        <span className="hidden md:grid">Description</span>
        <span className="hidden md:grid text-center"> Action</span>
      </div>

      <ul>
        {gallery.map((gly) => (
          <li
            key={gly._id}
            className="bg-gray-50 text-sm hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer "
          >
            <div className="flex items-center">
              <p className="pl-4">{gly.projectName}</p>
            </div>
            <p className="text-gray-500 sm:text-left text-right">
              {dateFormat(gly.createdAt)}
            </p>
            <p className="hidden md:flex">{gly.company}</p>
            <div className="sm:flex hidden justify-between items-center">
              <p className="truncate">{gly.description}</p>
              <BsThreeDotsVertical />
            </div>
            <div className="flex items-center justify-center gap-10">
              <button className="">
                <MdEdit size={"1.4rem"} />
              </button>
              <button>
                <RemoveBtn id={gly._id} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
