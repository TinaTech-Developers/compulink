import Image from "next/image";
import React from "react";

function OurStory() {
  return (
    <div className="bg-orange-200 mt-10">
      <h1 className="text-center text-4xl font-semibold py-10 text-white">
        Our story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="items-center justify-center">
          <h1 className="text-center text-3xl font-semibold uppercase py-6 text-white">
            About Us
          </h1>
          <p className="px-10 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dicta
            dolore veniam accusamus alias eaque quis illum voluptate, autem
            facere consequatur amet dolor, fugit ex, ea sint laborum et tenetur.
          </p>
        </div>
        <div className="items-center justify-center m-10 w-96 h-64 border border-white rounded-lg p-10 ml-32 ">
          <Image
            src={
              "https://miro.medium.com/v2/resize:fit:1280/0*1fOKSM9na9IBROxm.gif"
            }
            height={500}
            width={500}
            alt="Our Story"
            className="flex items-center justify-center "
          />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
