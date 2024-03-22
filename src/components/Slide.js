import React from "react";
import FillButton from "./FillButton";
import Typewriter from "typewriter-effect";

function Slide() {
  return (
    <div className="w-full h-[50%]">
      <div
        className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('/ab.gif')] w-full h-[50%] object-cover "
      >
        <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-80">
          <div className=" flex gap-3 text-center text-xl md:text-5xl  text-gray-300 py-4">
            <span className="font-bold"></span>
            <span className="text-white font-bold">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    " Software Development",
                    " ICT Sales & Repair",
                    " Network Solutions",
                    "Cyber Security",
                  ],
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

export default Slide;
