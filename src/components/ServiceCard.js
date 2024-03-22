import React from "react";
import FillButton from "./FillButton";

function ServiceCard({ icon, name, description }) {
  return (
    <div className=" flex flex-col items-center w-80 mx-auto h-full pb-8 md:w-96 md:h-96 border-2 border-blue-900 rounded-lg">
      <div className="py-6 pt-2">{icon}</div>
      <h1 className="text-red-700 font-semibold text-center text-xl">{name}</h1>
      <p className="px-4 text-gray-700 py-2 lowercase">{description}</p>
      <FillButton name={"Explore"} link={""} />
    </div>
  );
}

export default ServiceCard;
