import Image from "next/image";
import React, { useState, useEffect } from "react";
import FillButton from "./FillButton";
import dateFormat from "dateformat";

function Projects() {
  const PROJECT_URL = "/api/project";
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PROJECT_URL);
      const project = await response.json();
      setProject(project.project);
      console.log(project);
    }
    fetchData();
  }, []);

  return (
    <>
      {project?.map((project) => (
        <div
          key={project._id}
          className="md:flex w-80 md:w-[100%] h-full items-center justify-center  hover:shadow-2xl border rounded-lg "
        >
          <Image
            className=" w-80 md:w-80 h-80 pt-2 p-2 object-cover mx-auto"
            src={project.imageUrl}
            alt=""
            height={400}
            width={500}
          />

          <div className="p-8 max-w-sm">
            <h2 className="text-xl font-semibold py-2">
              Name: <span className="font-normal">{project.title}</span>
            </h2>
            <p>{project.description}</p>
            <div className="py-2 text-sm text-gray-500">
              <span className="font-semibold">Created on:</span>{" "}
              {dateFormat(project.createdAt)}
            </div>
            <div className="flex py-2">
              <FillButton name={"More"} link={""} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
