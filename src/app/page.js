// "use client";
// import About from "@/components/About";
// import Hero from "@/components/Hero";
// import HomeCarousel from "@/components/HomeCarousel";
// import Layout from "@/components/Layout";
// import Parnters from "@/components/Partners";
// import Promotion from "@/components/Promotion";
// import Service from "@/components/Service";
// import Testimonials from "@/components/Testimonials";
// import Work from "@/components/Work";

import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function Home() {
  // console.log(`Hello ${process.env.MONGODB_URI}`);
  return (
    // <Layout>
    //   <main className="pt-20 ">
    //     <Hero />
    //     <Parnters />
    //     <About />
    //     <Work />
    //     <Service />
    //     <Testimonials />
    //     <HomeCarousel />
    //     <Promotion />
    //   </main>
    // </Layout>

    <div className="bg-blue-950 w-full h-full md:h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-full h-full">
        <Image
          src={"/logo.png"}
          height={100}
          width={200}
          alt="compulink logo"
          className=" m-5 object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2 p-4 md:text-xl text-blue-950">
            <p className="text-5xl font-bold pb-2">We are tidying up!</p>
            <p>
              We're sorry, but our website is currently undergoing scheduled
              maintenance. We're working hard to improve your experience and
              will be back online shortly.
            </p>
            <p className="py-10">
              For urgent inquiries or assistance, please reach out to us at:
            </p>
            <div>
              <div className="flex items-center py-2 gap-4">
                <IoCallOutline />
                <p>08677105028 | 024494407</p>
              </div>
              <div className="flex items-center py-2 gap-4">
                <TfiEmail />
                <p>info@compulink.co.zw</p>
              </div>
            </div>
            <p>Thank you for your patience!</p>
          </div>
          <div className="col-span-1">
            <Image src={"/maintanance.gif"} height={400} width={500} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="w-[90%] h-10 bg-red-300 text-center py-2 text-sm">
        Copyright © 2024 Compulink Systems. All Rights Reserved
      </div> */}
    </div>
  );
}
