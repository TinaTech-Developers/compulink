"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import dateFormat from "dateformat";
import RemoveBtn from "./RemoveBtn";

function EventsList() {
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
    <div className="w-[98%] mx-auto p-4 border rounded-lg bg-white overflow-y-auto mt-4">
      <div className="my-3 text-lg p-2 font-semibold grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer border-b-2">
        <span>Project Name</span>
        <span className="sm:text-left text-right">Date Created</span>
        <span className="hidden md:grid">Event Date</span>
        <span className="hidden md:grid">Description</span>
        <span className="hidden md:grid text-center"> Action</span>
      </div>

      <ul>
        {events?.toReversed().map((evt) => (
          <li
            key={evt._id}
            className="bg-gray-50 text-sm hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer "
          >
            <div className="flex items-center">
              <p className="pl-4">{evt.title}</p>
            </div>
            <p className="text-gray-500 sm:text-left text-right">
              {dateFormat(evt.createdAt)}
            </p>
            <p className="hidden md:flex">{evt.date}</p>
            <div className="sm:flex hidden justify-between items-center">
              <p className="truncate">{evt.description}</p>
              <BsThreeDotsVertical />
            </div>
            <div className="flex items-center justify-center gap-10">
              <button className="">
                <MdEdit size={"1.4rem"} />
              </button>
              <button>
                <RemoveBtn id={evt._id} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
