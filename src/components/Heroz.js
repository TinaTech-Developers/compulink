import React from "react";
import FillButton from "./FillButton";
import Typewriter from "typewriter-effect";

function Heroz({ text }) {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('https://www.analyticsinsight.net/wp-content/uploads/2021/07/Technology-Can-Boost-Your-Business-Productivity.jpg')] w-full h-screen object-cover "
      >
        <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-60">
          <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4">
            <span className="font-bold ">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [text],
                }}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </span>
          </div>
          <div className="z-20">
            <FillButton name={"Read More."} link={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroz;
