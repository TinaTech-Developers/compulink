import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";

// async function getData() {
//   try {
//     const res = await fetch("/api/vaccant");
//     const response = await res.json();
//     if (!res.ok) {
//       throw new Error("failed to load vaccancies");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

function VaccantLists() {
  const VACCANT_URL = "/api/vaccant";
  const [vaccant, setVaccant] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(VACCANT_URL);
        const vaccant = await response.json();
        setVaccant(vaccant.vaccant);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log(vaccant);
  // const { vaccant } = await getData();
  return (
    <>
      {vaccant?.map((vac) => (
        <div
          key={vac._id}
          className=" w-80 mx-10 md:w-[80%] h-full border border-gray-400 rounded-md"
        >
          <div className="flex flex-wrap items-center justify-between px-8">
            <div className="flex items-center justify-center gap-2">
              <h1 className="font-semibold text-center">{vac.jobTitle}</h1>
              <li className="text-sm bg-gray-100 rounded-md px-2 text-center">
                {vac.department}
              </li>
            </div>
            <div className=" flex items-center justify-center gap-2 p-1 text-center font-semibold bg-gray-200 my-6 rounded-md">
              <CiLocationOn size={"1rem"} />
              <p>{vac.branch}</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center px-8 gap-4">
            <p className="text-gray-400 font-light">{vac.duties}</p>
            <p>Qualifications</p>
            <p className="text-gray-400 font-light">{vac.qualifications}</p>
            <div className="flex items-start justify-center py-6 gap-10">
              <div className="flex justify-center items-center gap-2">
                <MdOutlineTimer size={"1.5rem"} />
                <p>{vac.contract}</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiMoneyDollarCircleLine size={"1.5rem"} />
                <p>{vac.salary}</p>
              </div>
            </div>
            <Link
              href={"/apply"}
              className="p-2 hover:bg-gray-500 hover:text-white rounded-lg my-2 "
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default VaccantLists;
