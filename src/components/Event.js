"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FillButton from "./FillButton";

function Event() {
  const EVENTS_URL = "/api/events";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(EVENTS_URL);
      const events = await response.json();
      setEvents(events.events);
    }
    fetchData();
  }, []);

  return (
    <>
      {events.slice(0, 1).map((events) => (
        <div key={events._id} className="bg-slate-50 -translate-y-20">
          <h1 className="text-2xl font-semibold text-center py-6">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 px-4">
            <div className="bg-orange-100 items flex justify-center rounded-lg ">
              <div className="relative">
                <Image
                  className="flex items-center justify-center p-12"
                  src="/event.png"
                  width={800}
                  height={800}
                  alt="compulink events"
                />
                <div className="absolute bottom-28 md:bottom-32 left-16">
                  <p className="text-lg md:text-3xl font-bold text-blue-900 w-56">
                    {events.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="items-center justify-center">
              <h1 className="font-bold text-[30px] px-4 pt-16">
                {events.title}
              </h1>
              <p className="p-6 text-gray-400">{events.description}</p>
              <h1 className="text-center p-2 font-bold text-[24px]">
                Category
              </h1>
              <h2 className="text-center text-gray-400 ">General</h2>

              <div className=" grid md:flex items-center justify-center p-4 gap-4 ">
                <div className="flex items-center justify-center gap-4">
                  <FillButton name={events.date} link="/" />
                  <FillButton name="More" link="www.evolveictsummit.com" />
                </div>
                <p className="p-2 bg-red-600 text-xs md:text-sm text-white text-center rounded-3xl">
                  {events.venue}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Event;
