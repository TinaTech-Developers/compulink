"use client";
import React from "react";
import Calendar from "react-calendar";
import Chart from "./Chart";

function Calender() {
  return (
    <>
      <div className="pt-7">
        <div className=" md:flex items-center justify-center  gap-36 w-full h-full md:col-span-2 relative md:h-[48vh] p-4 border rounded bg-[#3399CC] ">
          <div className=" flex items-center justify-center mx-auto my-10 w-80 text-lg text-center p-4 bg-white rounded-xl ">
            <Calendar className={"text-gray-600 "} />
          </div>
          <div className="flex items-center justify-center mx-auto">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
