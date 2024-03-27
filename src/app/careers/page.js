import Layout from "@/components/Layout";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import Image from "next/image";
import VaccantLists from "@/components/VaccantLists";
import VaccantHero from "@/components/VaccantHero";
function Careers() {
  return (
    <Layout>
      <VaccantHero />
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
