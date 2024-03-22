"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

// export async function generateStaticParams() {
//   const response = await fetch("http://localhost:3000/api/applications");
//   cache: "no-store";
//   const applications = await response.json();

//   return applications.applications.map((appl) => ({
//     id: appl._id.toString(),
//   }));

//   return applications;
// }

// async function getApplication(id) {
//   const res = await fetch(`http://localhost:3000/api/applications/${id}`);
//   const applications = await res.json();
//   return applications;
// }
async function VaccantList() {
  const APPLICATIONS_URL = "http://localhost:3000/api/applications";
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(APPLICATIONS_URL);
      const applications = await response.json();
      setApplications(applications.applications);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full p-4 border rounded-lg bg-white overflow-y-auto">
      <div className="my-3 p-2 font-semibold grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer">
        <span>Name</span>
        <span className="sm:text-left text-right">Email</span>
        <span className="hidden md:grid">Position</span>
        <span className="hidden md:grid">Phone</span>
      </div>

      <ul>
        {applications?.map((app) => (
          <li
            key={app._id}
            className="bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer "
          >
            <div className="flex items-center">
              <div className="bg-amber-50 p-3 rounded-lg">
                <BsPersonFill className="text-amber-800" />
              </div>
              <p className="pl-4">{app.fullname}</p>
            </div>
            {/* <p className="text-gray-500 sm:text-left text-right">{app.email}</p> */}
            <Link
              href="javascript:void(0)"
              onClick={() => (window.location = `mailto:${app.email}`)}
              className="text-gray-500 sm:text-left text-right"
            >
              {app.email}
            </Link>
            <p className="hidden md:flex">{app.job}</p>
            <div className="sm:flex hidden justify-between items-center">
              <p>{app.phone}</p>
              <div className="flex gap-6">
                <Link href={app.pdfUrl}>
                  <FaEye />
                </Link>
                <BsThreeDotsVertical />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VaccantList;
