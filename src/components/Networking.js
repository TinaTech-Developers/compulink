import React from "react";
import Projects from "./Projects";
function Networking() {
  return (
    <>
      <h1 className="text-2xl text-gray-700 text-center pb-2 pt-10">
        Networking
        <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6 mb-14">
        <Projects />
        <Projects />
      </div>
    </>
  );
}

export default Networking;
