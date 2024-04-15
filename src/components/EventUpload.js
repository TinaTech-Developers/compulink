import React, { useState, useRef } from "react";
import FillButton from "@/components/FillButton";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadDropzone, Uploader } from "../lib/uploadthing";
import { FileText, Pencil, Plus } from "lucide-react";

function EventUpload() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  async function onSubmit(data) {
    data.productImageUrl = imageUrl;
    data.pdfUrl = pdfUrl;
    console.log(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl || !venue || !description) {
      alert("You are supposed to fill all the fields.");
      return;
    }
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, date, imageUrl, venue, description }),
      });
      if (res.ok) {
        toast.success("Event created");
        onClick();
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid md:flex gap-10 mx-2 mt-10 pb-20">
      <div className="border border-gray-500 mt-5 pb-14 w-full md:w-[50%] h-[22rem] bg-blue-200 p-10 ">
        <div className="col-span-full  ">
          <div className="flex justify-between items-center mb-4  ">
            <label
              htmlFor="course-image"
              className=" text-xs font-medium text-gray-900"
            >
              <h1 className="px-auto"> Event Image</h1>
            </label>
            {imageUrl && (
              <button
                onClick={() => setImageUrl("")}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change Image</span>
              </button>
            )}
          </div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Product image"
              width={1000}
              height={667}
              className="w-full h-56 object-cover"
            />
          ) : (
            <UploadDropzone
              value={imageUrl}
              ref={inputRef}
              onChange={(e) => setImageUrl(e.target.value)}
              endpoint="productImage"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-full md:w-[63%] h-[26rem] mx-4 "
      >
        <div className="grid grid-cols-5 w- gap-4 pt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
            placeholder="Event title"
            className="col-span-5 outline-none border  p-2   text-gray-700"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 py-2">
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            name="day"
            className="col-span-5 outline-none border    text-gray-700 p-2"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 py-2">
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="venue"
            type="text"
            name="venue"
            className="col-span-5 outline-none border   text-gray-700 p-2"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 py-2">
          <input
            onChange={(e) => setVenue(e.target.value)}
            placeholder="venue"
            type="text"
            name="venue"
            className="col-span-5 outline-none border   text-gray-700 p-2"
          />
        </div>
        <div className="grid grid-cols-5 gap-4  pb-5">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            rows={5}
            className=" py-2 px-4  w-lg outline-none  border text-gray-700 col-span-5"
            name="description"
          ></textarea>
        </div>
        <button className=" flex items-end justify-end z-20">
          <FillButton name={"Save"} link={""} onClick={handleSubmit} />
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default EventUpload;
