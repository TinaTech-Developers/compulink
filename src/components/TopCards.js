"use client";
import React, { useState, useEffect } from "react";

export default function TopCards() {
  const GALLERY_URL = "http://localhost:3000/api/gallery-upload";
  const EVENTS_URL = "http://localhost:3000/api/events";
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(GALLERY_URL);
      const gallery = await response.json();
      setGallery(gallery.gallery);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(EVENTS_URL);
      const events = await response.json();
      setEvents(events.events);
    }
    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className=" lg:col-span-2 col-span-1 bg-white   flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{gallery.length + events.length}</p>
          <p className="text-gray-600">Total Updates</p>
        </div>
        <p className="bg-blue-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-blue-700 text-lg">+8%</span>
        </p>
      </div>
      <div className=" lg:col-span-2 col-span-1 bg-white   flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{gallery.length}</p>
          <p className="text-gray-600">Gallery Updates</p>
        </div>
        <p className="bg-blue-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-blue-700 text-lg">
            +
            {Math.round(
              (gallery.length / (events.length + gallery.length)) * 100
            )}
            %
          </span>
        </p>
      </div>
      <div className="bg-white   flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{events.length}</p>
          <p className="text-gray-600">Total Events</p>
        </div>
        <p className="bg-blue-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-blue-700 text-lg">
            +
            {Math.round(
              (events.length / (events.length + gallery.length)) * 100
            )}
            %
          </span>
        </p>
      </div>
    </div>
  );
}
