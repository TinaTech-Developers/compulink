"use client";
import React from "react";
import Calendar from "react-calendar";
import Chart from "./Chart";
import DateCalendarValue from "@/app/dashboard/components/DateCalendarValue";

function Calender() {
  return (
    <>
      <div className="pt-7">
        <div className=" md:flex items-center justify-center  w-80 gap-36 md:w-full h-full md:col-span-2 relative md:h-[65vh] p-4 border rounded bg-[#3399CC] ">
          <div className=" flex items-center justify-center mx-auto my-10 w-80 md:w-96 text-lg text-center p-4 bg-white rounded-xl ">
            <DateCalendarValue />
          </div>
          <div className="flex items-center justify-center mr-10">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
