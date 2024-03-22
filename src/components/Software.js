import React from "react";
import Projects from "./Projects";

function Software() {
  return (
    <>
      <h1 className="text-2xl text-gray-700 text-center pb-2">Software</h1>
      <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-10">
        <Projects />
      </div>
    </>
  );
}

export default Software;
