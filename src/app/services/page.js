import FillButton from "@/components/FillButton";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

function Services() {
  return (
    <Layout>
      <div className="mt-20 ">
        <Hero />
        <div className="w-full h-full">
          <div className="flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
              <div className="flex flex-col h-96 items-center justify-center px-8">
                <h1 className="uppercase text-3xl text-blue-800  font-semibold p-4">
                  our Services
                </h1>
                <p className="text-gray-600">
                  Offering a variety of services ,Managed Services are also
                  provided by Compulink Systems through a Tier 3 Data Centre
                  offering cloud services. The Data Centre hosts services on a
                  secure Private Cloud Platform leveraging on leading ISPs to
                  ensure availability at all times.
                </p>
              </div>
              <div className=" flex items-center justify-center p-32 ">
                <div className="w-[121px] shadow-2xl">
                  <FillButton name={"Read More.."} link={""} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mx-20 md:grid-cols-2 gap-2 -translate-y-24 ">
              <div className="flex flex-col items-start ">
                <div className="flex gap-2 py-2 pl-14 items-center ">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Innovative Software Development</h1>
                </div>
                <div className="flex gap-2 py-2 pl-14 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Network Infrastructure</h1>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="flex gap-2 py-2 pl-14 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Software & System Integration</h1>
                </div>{" "}
                <div className="flex gap-2 py-2 pl-14 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Server Setup</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-10 md:pl-20">
            <div class="w-7  overflow-hidden inline-block">
              <div class=" h-12  bg-blue-700 rotate-45 transform origin-top-right"></div>
            </div>
            <h1 className="-translate-y-4 text-2xl font-semibold text-blue-700 ">
              Request This Service
            </h1>
            <hr className="border-[1.5px] border-blue-700" />
            <h1 className="py-2 text-3xl font-normal">Need A Website?</h1>
            <p className="py-4 text-gray-700">
              We offer solutions ranging in the given scope ( AI, Data Science
              Solutions, API INTEGRATION, WEB & MOBILE SOLUTIONS, CHATBOTS,
              PIPELINE DEVELOPMENT). Use of the software is important for
              automation of the organisations tasks as well as reporting the
              progress or lags in the organisations activities.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"https://neuronic.tech/assets/images/Programmer.gif"}
              height={700}
              width={500}
              alt=""
            />
          </div>
        </div>
        <Service />
      </div>
    </Layout>
  );
}

export default Services;
