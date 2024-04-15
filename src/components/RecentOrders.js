"use client";
import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import dateFormat from "dateformat";
import Link from "next/link";

export default function RecentOrders() {
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
    <Link
      href={"/dashboard/events"}
      className="w-full md:w-[70vh] col-span-1 relative h-full m-auto p-4 border rounded-lg bg-white overflow-scroll text-sm"
    >
      <h1>Recent Events</h1>
      {events?.toReversed().map((evt) => (
        <ul key={evt._id}>
          <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer ">
            <div className="bg-amber-100 rounde-lg p-3">
              <FaShoppingBag className="text-amber-700" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">{evt.title}</p>
              <p className="text-gray-600 text-sm">{evt.venue}</p>
            </div>
            <p className="hidden  md:block absolute right-4 pt-6 text-xs">
              {dateFormat(evt.date)}
            </p>
          </li>
        </ul>
      ))}
    </Link>
  );
}
