"use client";
import Layout from "@/components/Layout";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import Image from "next/image";
import VaccantLists from "@/components/VaccantLists";
function Careers() {
  return (
    <Layout>
      <div className="w-full h-screen">
        <div
          className="bg-scroll bg-cover bg-center
   bg-no-repeat bg-[url('https://www.analyticsinsight.net/wp-content/uploads/2021/07/Technology-Can-Boost-Your-Business-Productivity.jpg')] w-full h-screen object-cover "
        >
          <div className="flex flex-col items-center justify-center bg-scroll bg-center bg-black w-full h-screen bg-opacity-60">
            <div className=" flex gap-3 text-center text-3xl   text-gray-300 py-4">
              <span className="font-bold">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: "Welcome to COMPULINK SYSTEMS Careers",
                  }}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </span>
            </div>

            <p className="md:-translate-x-80 px-10 text-white">
              <span className="text-4xl md:text-6xl font-thin">Join the</span>
              <br />
              <span className="text-4xl font-normal text-blue-950">
                COMPU<span className="text-red-500">LINK</span> team
              </span>
              <br />
              We have fantastic job opportunities for talented people waiting to
              realise their full potential.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center gap-6 h-40 mx-auto ">
        <h1 className="texl-xl md:text-3xl">
          Regional <span className="font-semibold">vaccancies</span>
        </h1>
        <p className="text-center mx-8">
          {"Find out more about the business and it's career opportunities "}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 0 py-14">
        <div className=" flex flex-col items-center justify-top w-72 h-80  shadow shadow-3xl">
          <Image
            src={"/logo.png"}
            alt="Compulink"
            height={100}
            width={200}
            className="py-10"
          />
          <h1 className="font-semibold">Compulink Harare</h1>
          <p className="text-sm text-gray-500 px-4">
            Offering a variety of services in Harare, including networking,
            software, cloud services, ICT sale and Repair, etc
          </p>
        </div>
        <div className="flex flex-col items-center justify-top w-72 h-80  shadow shadow-3xl">
          <Image
            src={"/logo.png"}
            alt="Compulink"
            height={100}
            width={200}
            className="py-10"
          />
          <h1 className="font-semibold">Compulink Bulawayo</h1>
          <p className="text-sm text-gray-500 px-8">
            Offering a variety of services in Matebeleland Region, including
            networking, software, cloud services, ICT sale and Repair, etc
          </p>
        </div>
        <hr className="w-[90%] my-10" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-3xl font-semibold">
            Why join <span className="font-thin">Compulink Systems?</span>
          </h1>
          <p className="py-4 text-center mx-8">
            Be a part of a trusted brand that offers technical, networking and
            software solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center w-56 h-64">
              <FaRegThumbsUp size={"3.8rem"} color="blue" />
              <h1 className="py-4 font-semibold text-center">
                Find your greatness
              </h1>
              <p className="px-4 text-center text-gray-500">
                Become part of a company where potential is revealed and growth
                is inevitable.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 h-64">
              <BsPersonHearts size={"3.8rem"} color="blue" />
              <h1 className="py-4 font-semibold text-center">Our values</h1>
              <p className="px-4 text-center text-gray-500">
                Become part of a company where potential is revealed and growth
                is inevitable.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 h-64">
              <FaAward size={"3.8rem"} color="blue" />
              <h1 className="py-4 font-semibold text-center">Our benefits</h1>
              <p className="px-4 text-center text-gray-500">
                Become part of a company where potential is revealed and growth
                is inevitable.
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[90%] my-10" />

        <VaccantLists />
      </div>
    </Layout>
  );
}

export default Careers;
