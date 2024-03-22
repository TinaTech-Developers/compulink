import React from "react";
import { MdOutlineSecurity, MdNetworkCheck } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { FcSalesPerformance } from "react-icons/fc";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <div className="bg-scroll bg-gradient-to-r from-gray-100 bg-opacity h-full text-gray-700">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center   uppercase text-xl font-semibold md:text-2xl py-4">
          Our Services
        </h1>
        <h2 className="text-3xl md:text-4xl text-blue-800 font-bold w-96 md:w-[500px] py-6 text-center">
          Bringing Technology from the horizon
        </h2>
        <p className="text-center text-gray-700 w-96 md:w-[600px]">
          Delivering unmatched service is what we live for. We create a culture
          of care and service where our customer comes first. .
        </p>
        <div className="flex flex-wrap gap-6 m-10 mx-14">
          <ServiceCard
            icon={<FaCloudDownloadAlt size={"2.5rem"} color="gray" />}
            name={"Cloud Computing"}
            description={
              "Cloud technology can centralize the data capture, storage, and interpretation processes. It can also reduce the costs associated with these critical processes and generate far richer, more precise, faster data-led insights, which banks can use to drive performance. "
            }
          />
          <ServiceCard
            icon={<MdNetworkCheck size={"2.5rem"} color="gray" />}
            name={"Networking"}
            description={
              "Computer networking enables employees to share ideas more easily and work more efficiently. "
            }
          />
          <ServiceCard
            icon={<CgSoftwareDownload size={"2.5rem"} color="gray" />}
            name={"Software Development"}
            description={
              "We offer solutions ranging in the given scope ( ARTIFICIAL INTELLIGENCE, DATA SCIENCE SOLUTIONS, API INTEGRATION, WEB & MOBILE SOLUTIONS, CHATBOTS, PIPELINE DEVELOPMENT). Use of the software is important for automation of the organisations tasks as well as reporting the progress or lags in the organisations activities."
            }
          />
          <ServiceCard
            icon={<MdOutlineSecurity size={"2.5rem"} color="gray" />}
            name={"Cyber Security"}
            description={
              "Cyber security solutions are technological tools and services that help protect organizations against cyber attacks, which can result in application downtime, theft of sensitive data, damage to reputation, compliance fines, and other adverse consequences."
            }
          />
          <ServiceCard
            icon={<FcSalesPerformance size={"2.5rem"} color="gray" />}
            name={"Sales"}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
