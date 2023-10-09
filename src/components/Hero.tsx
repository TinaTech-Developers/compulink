import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=" bg-orange-200 pt-24 w-full h-full py-10 ">
      <div className=" ml-20">
        <Image
          src={
            "https://imgeng.jagran.com/images/2023/mar/Best%20desktop%20Computers1678949851132.jpg"
          }
          alt="Home Image"
          height={800}
          width={1100}
          className="relative"
        />
      </div>
      <div className="absolute bottom-0 w-96 h-96 bg-white rounded-2xl  translate-x-1/2 translate-y-1/4 ">
        <div className="mx-6">
          <h2 className="text-gray-400 text-xl uppercase font-semibold mt-5">
            85% sale off
          </h2>
          <h1 className="uppercase font-bold text-5xl py-2 ">
            Furniture <br /> at cost
          </h1>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
            obcaecati. Quibusdam repudiandae corrupti illo accusamus distinctio
            reprehenderit amet veniam ipsam non natus, dicta optio illum?
            Delectus vero iure quas voluptate.
          </p>
          <Link
            className="px-4 py-2 bg-orange-700 hover:bg-red-700 ease-in-out"
            href={"/"}
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
