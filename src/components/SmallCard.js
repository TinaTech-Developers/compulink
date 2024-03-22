import React from "react";
import FillButton from "./FillButton";

function SmallCard({ icon, name, description }) {
  return (
    <div className=" flex flex-col items-center  w-64 h-72 border-4 border-blue-900 rounded-lg">
      <div className="py-6">{icon}</div>
      <h1 className="text-white font-semibold text-center text-xl">{name}</h1>
      <p className="px-4 text-gray-300 py-2">{description}</p>
      <FillButton name={"View"} link={""} />
    </div>
  );
}

export default SmallCard;
