import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import React from "react";
import Link from "next/link";
import FillButton from "./FillButton";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center justify-center pt-12">
        <Image
          src={"/ab.gif"}
          alt="compulink gif"
          height={500}
          width={500}
          className=" p-6 h-[450px]  w-[600px] object-cover  rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-10 mb-10">
        <h1 className="p-6 text-center font-semibold text-blue-500 text-xl uppercase">
          Welcome to compulink systems
        </h1>
        <p className="text-start text-2xl md:text-4xl  font-bold">
          Compulink Systems has been in the IT Ecosystem for 30 Years.
        </p>
        <p className="py-2">
          In these years Compulink Systems has managed to deliver high standard
          products and services to various institutions in the service scope of
          networking services, cyber security, software services and hardware
          supply.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 ml-20 ">
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <GoDotFill className="text-blue-500" />
            <h1 className="">Innovative Software Development</h1>
          </div>
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <GoDotFill className="text-blue-500" />
            <h1 className="">Network Infrastructure</h1>
          </div>{" "}
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <GoDotFill className="text-blue-500" />
            <h1 className="">Software & System Integration</h1>
          </div>{" "}
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <GoDotFill className="text-blue-500" />
            <h1 className="">Server Setup</h1>
          </div>
        </div>

        <FillButton name={"Read More"} link={""} />
      </div>
    </div>
  );
}

export default About;
