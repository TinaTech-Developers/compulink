"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function VaccantHero() {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('https://www.analyticsinsight.net/wp-content/uploads/2021/07/Technology-Can-Boost-Your-Business-Productivity.jpg')] w-full h-screen object-cover "
      >
        <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-60">
          <div className=" flex gap-3 text-center text-3xl   text-gray-300 py-4">
            <span className="font-bold">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: "Welcome to COMPULINK SYSTEMS Careers",
                }}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </span>
          </div>

          <p className="md:-translate-x-80 px-10 text-white">
            <span className="text-4xl md:text-6xl font-thin">Join the</span>
            <br />
            <span className="text-4xl font-normal text-blue-950">
              COMPU<span className="text-red-500">LINK</span> team
            </span>
            <br />
            We have fantastic job opportunities for talented people waiting to
            realise their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
