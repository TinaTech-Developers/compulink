"use client";
import About from "@/components/About";
import Heroz from "@/components/Heroz";
import Layout from "@/components/Layout";
import Software from "@/components/Software";
import WhyUs from "@/components/WhyUs";
import React from "react";

function Portfolio() {
  return (
    <Layout>
      <div className="pt-[86px]">
        <Heroz text={"Our Portfolio"} />
        <div className=" flex flex-col items-center justify-center w-full py-10  text-center">
          <h1 className=" pb-10 text-center text-3xl text-blue-700 font-semibold">
            <div className=" relative translate-x-52 translate-y- w-5  overflow-hidden inline-block"></div>
            Who Are We?
          </h1>
          <p className="text-gray-400 px-10">
            Compulink Systems (PVT) LTD is a Zimbabwean ICT solutions company
            that was founded in October 1991. Compulink Computer Systems is a
            leading provider of information and communication technology (ICT)
            products and professional services to customers in Zimbabwe, the
            region, and beyond Africa.
          </p>
        </div>
        <WhyUs />
        <About />
        <h1 className="text-center text-3xl font-semibold pt-10 text-blue-700">
          Projects
        </h1>
        <Software />
      </div>
    </Layout>
  );
}

export default Portfolio;
