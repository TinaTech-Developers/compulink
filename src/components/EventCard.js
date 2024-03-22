"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FillButton from "./FillButton";

function EventCard() {
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
      {events.map((event) => (
        <div
          key={event._id}
          className=" md:flex gap-4 h-full w-[100%] md:h-96 border items-center justify-center mt-10"
        >
          <Image
            src={event.imageUrl}
            height={400}
            width={300}
            alt=""
            className="h-72 w-72 object-cover my-10 mx-auto"
          />
          <div className="flex-col items-center justify-center p-8 ">
            <h1 className="text-lg font-semibold pb-8">{event.title}</h1>
            <p className="text-gray-500 pb-8 truncate  h-44 w-44">
              {event.description}
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-white">
              <p className="p-1 px-2 rounded-full bg-red-500">{event.venue}</p>
              <p className="p-1 px-2 rounded-full  bg-blue-900">{event.date}</p>
            </div>
            <div className="w-28 py-4 mx-auto">
              <FillButton
                name={"Read More!"}
                link={"/www.evolveictsummit.com"}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default EventCard;
