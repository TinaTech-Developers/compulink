import React from "react";
import Button from "./Button";
import { MdOutlineSecurity, MdNetworkCheck } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import SmallCard from "./SmallCard";

function Work() {
  return (
    <div className="bg-scroll bg-[url('/banner.jpg')] sticky h-full  object-cover ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start pl-10 pt-20">
          <h1 className="text-lg md:text-xl text-blue-400 uppercase font-semibold ">
            Why choose us
          </h1>
          <h2 className="py-4 text-white text-2xl md:text-4xl font-bold">
            Technical Features <br></br>From COMPU
            <span className="text-red-600 uppercase">link</span>
          </h2>
          <p className="text-white text-center mr-10 md:pr-4">
            A world class Information System Integration House, offering solid
            solutions backed by service excellence that exceeds customer
            expectations.
          </p>
          <div className="pt-6">
            <Button name={"Read More"} link={""} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 py-10">
          <SmallCard
            icon={<MdOutlineSecurity size={"2.5rem"} color="white" />}
            name={"Cyber Security"}
            description={
              "Ransomware Prevention Kit - Prevent, detect and restore."
            }
          />
          <SmallCard
            icon={<MdNetworkCheck size={"2.5rem"} color="white" />}
            name={"Networking"}
            description={
              "Computer networking enables employees to share ideas more easily and work more efficiently. "
            }
          />
          <SmallCard
            icon={<FaCloudDownloadAlt size={"2.5rem"} color="white" />}
            name={"Cloud Computing"}
            description={
              "It allows organizations to scale, maintain flexibility, and focus their efforts on business operations."
            }
          />
          <SmallCard
            icon={<CgSoftwareDownload size={"2.5rem"} color="white" />}
            name={"Software Development"}
            description={
              "Offering  custom based software services and solutions to every business scale."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
