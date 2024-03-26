"use client";
import FillButton from "@/components/FillButton";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadDropzone, Uploader } from "../lib/uploadthing";
import { FileText, Pencil, Plus } from "lucide-react";

function ApplicationForm({
  id,
  jobTitle,
  branch,
  duties,
  qualifications,
  contract,
  salary,
  department,
}) {
  const [job, setJob] = useState(jobTitle);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  async function onSubmit(data) {
    data.productImageUrl = imageUrl;
    data.pdfUrl = pdfUrl;
    console.log(data);
  }

  const handleSubmitt = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/vaccant/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ job }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !phone || !experience || !bio || !job) {
      toast.error(" please fill in correct details and try again");
    }
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          pdfUrl,
          experience,
          bio,
          job,
        }),
      });
      if (res.ok) {
        toast.success("You've successfully applied for this position");
      } else {
        toast.warn("Unable to apply, please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="  mx-auto flex flex-col items-center justify-center h-full w-2/3 md:w-2/4 p-8 rounded-lg border border-red-500 mt-32">
        <Image src={"/logo.png"} alt="Compulink" height={100} width={200} />
        <p className="py-4">Complete & submit your application</p>
        <form onSubmit={handleSubmitt}>
          <p value={job} onChange={(e) => setJob(e.target.value)}>
            {jobTitle} Position
          </p>
        </form>
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 gap-4">
          <input
            className="text-center"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Full Name<span className="text-red-800">*</span>
            </p>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Email<span className="text-red-800">*</span>
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Phone<span className="text-red-800">*</span>
            </p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Attach CV<span className="text-red-800">*</span>
            </p>
            <input
              type="file"
              className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
            />
          </div> */}
          <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Experience<span className="text-red-800">*</span>
            </p>
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <p className="font-bold text-sm col-span-1">
              Bio<span className="text-red-800">*</span>
            </p>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={5}
              className="bg-gray-300 py-2 px-4  w-full outline-none border-none col-span-3"
            ></textarea>
          </div>

          <div className="col-span-full">
            <div className="flex justify-between items-center mb-4">
              {pdfUrl && (
                <button
                  onClick={() => setPdfUrl("")}
                  type="button"
                  className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Change PDF</span>
                </button>
              )}
            </div>
            <div className="col-span-full">
              <div className="flex justify-between items-center mb-4">
                <label
                  htmlFor="course-image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Attach CV
                </label>
                {pdfUrl && (
                  <button
                    onClick={() => setPdfUrl("")}
                    type="button"
                    className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                  >
                    <Pencil className="w-5 h-5" />
                    <span>Change PDF</span>
                  </button>
                )}
              </div>
              {pdfUrl ? (
                <a
                  className="flex space-x-3 items-center text-purple-600"
                  target="_blank"
                  href={pdfUrl}
                >
                  <FileText />
                  <span>View PDF</span>
                </a>
              ) : (
                <UploadDropzone
                  value={pdfUrl}
                  onChange={(e) => setPdfUrl(e.target.value)}
                  endpoint="pdfUploader"
                  onClientUploadComplete={(res) => {
                    setPdfUrl(res[0].url);
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex items-end">
            <FillButton name={"Submit"} link={""} onClick={handleSubmit} />
          </div>
          <ToastContainer />
        </form>
      </div>
    </Layout>
  );
}

export default ApplicationForm;
