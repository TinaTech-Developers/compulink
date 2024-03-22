"use client";
import { useState } from "react";
import DashbordLayout from "@/components/DashbordLayout";
import Header from "@/components/Header";
import FileUpload from "../components/FileUpload";
import Link from "next/link";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Card from "../components/Card";

function Gallery() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <DashbordLayout>
      <main className=" bg-gray-200  min-h-screen w-full">
        <div className="flex-col items-center justify-center">
          <Header />

          <div className="flex flex-col  top-0 ">
            <div className=" flex items-center  h-10 bg-blue-600 ">
              <Link
                onClick={() => updateToggle(1)}
                href={""}
                className="flex items-center justify-center gap-1 py-2 px-5 hover:bg-white focus:outline-none focus:bg-white focus:text-blue-700"
              >
                <MdOutlinePlaylistAdd size={"1.5rem"} /> Gallery
              </Link>{" "}
              <Link
                onClick={() => updateToggle(2)}
                href={""}
                className="py-2 px-5 hover:bg-white focus:outline-none focus:bg-white active: focus:text-blue-700 "
              >
                Gallery List
              </Link>
            </div>
            <div className="">
              <div className={toggle == 1 ? "block" : "hidden"}>
                <FileUpload />
              </div>
              <div className={toggle == 2 ? "block" : "hidden"}>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashbordLayout>
  );
}

export default Gallery;
