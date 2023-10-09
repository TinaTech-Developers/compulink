"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Products() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id: any) {
    setToggle(id);
  }

  return (
    <div>
      <div className="items-center justify-center">
        <h1 className="text-center font-bold text-4xl uppercase py-10">
          Popular Products
        </h1>
        <p className="text-center px-10 text-clip">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eaque,
          illum vel voluptates quia praesentium eos. Ex, deserunt porro dolor
          nemo mollitia eaque obcaecati quae esse atque saepe illo vero?
        </p>
      </div>
      <div>
        <div
          className="flex items-center justify-center pt-12 border-b-2 border-gray-400
      
      mb-8 w-[80%] mx-[10%]"
        >
          <li
            onClick={() => updateToggle(1)}
            className="p-6 list-none cursor-pointer hover:bg-orange-700 hover:text-white"
          >
            Desktops
          </li>
          <li
            onClick={() => updateToggle(2)}
            className="p-6 list-none cursor-pointer hover:bg-orange-700 hover:text-white"
          >
            Printers
          </li>
          <li
            onClick={() => updateToggle(3)}
            className="p-6 list-none cursor-pointer hover:bg-orange-700 hover:text-white"
          >
            Servers
          </li>
          <li
            onClick={() => updateToggle(4)}
            className="p-6 list-none cursor-pointer hover:bg-orange-700 hover:text-white"
          >
            Keyboards
          </li>
        </div>
        <div className={toggle === 1 ? "block" : "hidden"}>
          <div className="w-[90%] h-[100%]  border mx-[5%] rounded-3xl ">
            <h1 className="px-4 py-2 bg-orange-700 w-32 m-10 rounded-lg text-center text-white font-semibold">
              Desktops
            </h1>
            <div className="grid grid-col-1 md:grid-cols-2 items-center justify-center ">
              <Image
                src={
                  "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/27-7790/general/new-category-page-desktop-black-inspiron-27-7790-3880-800x620.png?fmt=png-alpha&wid=800&hei=620"
                }
                height={600}
                width={600}
                alt={"Desktops"}
              />
              <div className="mx-6">
                <h2 className="uppercase text-gray-700 font-bold text-4xl">
                  About This
                </h2>
                <p className="text-gray-800 my-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit incidunt magni possimus cum vel nulla sapiente, hic
                  dolore voluptas. Exercitationem, sunt. Aliquid architecto fuga
                  est facilis animi veniam delectus omnis.
                </p>
                <Link
                  className="relative py-2 px-4 rounded-full bg-transparent text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  href={"/product"}
                >
                  View More
                </Link>
                <h2 className="text-red-500 font-semibold py-6">$1092.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          <div className="w-[90%] h-[100%] border mx-[5%] rounded-3xl">
            <h1 className="px-4 py-2 bg-orange-700 w-32 m-10 rounded-lg text-center text-white font-semibold">
              Printers
            </h1>
            <div className="grid grid-col-1 md:grid-cols-2 items-center justify-center">
              <Image
                src={
                  "https://www.innovink.lk/wp-content/uploads/2020/05/HP-Laser-MFP-137fnw-1.png"
                }
                height={100}
                width={500}
                alt={"Printers"}
              />
              <div className="mx-6">
                <h2 className="uppercase text-gray-700 font-bold text-4xl">
                  About This
                </h2>
                <p className="text-gray-800 my-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit incidunt magni possimus cum vel nulla sapiente, hic
                  dolore voluptas. Exercitationem, sunt. Aliquid architecto fuga
                  est facilis animi veniam delectus omnis.
                </p>
                <Link
                  className="relative py-2 px-4 rounded-full bg-transparent text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  href={"/product"}
                >
                  View More
                </Link>
                <h2 className="text-red-500 font-semibold py-6">$1092.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 3 ? "block" : "hidden"}>
          <div className="w-[90%] h-[100%] border mx-[5%] rounded-3xl">
            <h1 className="px-4 py-2 bg-orange-700 w-32 m-10 rounded-lg text-center text-white font-semibold">
              Servers
            </h1>
            <div className="grid grid-col-1 md:grid-cols-2 items-center justify-center">
              <Image
                src={
                  "https://www.fiberopticshare.com/wp-content/uploads/2019/05/rack-network-server.jpg"
                }
                height={600}
                width={600}
                alt={"Servers"}
              />
              <div className="mx-6">
                <h2 className="uppercase text-gray-700 font-bold text-4xl">
                  About This
                </h2>
                <p className="text-gray-800 my-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit incidunt magni possimus cum vel nulla sapiente, hic
                  dolore voluptas. Exercitationem, sunt. Aliquid architecto fuga
                  est facilis animi veniam delectus omnis.
                </p>
                <Link
                  className="relative py-2 px-4 rounded-full bg-transparent text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  href={"/product"}
                >
                  View More
                </Link>
                <h2 className="text-red-500 font-semibold py-6">$1092.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 4 ? "block" : "hidden"}>
          <div className="w-[90%] h-[100%] border mx-[5%] rounded-3xl">
            <h1 className="px-4 py-2 bg-orange-700 w-32 m-10 rounded-lg text-center text-white font-semibold">
              Keyboards
            </h1>
            <div className="grid grid-col-1 md:grid-cols-2 items-center justify-center">
              <Image
                src={
                  "https://m.media-amazon.com/images/S/aplus-media/sc/402d0ade-ec2c-49aa-ace8-ef1f6d471dbe.__CR0,286,1500,928_PT0_SX970_V1___.jpg"
                }
                height={600}
                width={600}
                alt={"Keyboards"}
              />
              <div className="mx-6">
                <h2 className="uppercase text-gray-700 font-bold text-4xl">
                  About This
                </h2>
                <p className="text-gray-800 my-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit incidunt magni possimus cum vel nulla sapiente, hic
                  dolore voluptas. Exercitationem, sunt. Aliquid architecto fuga
                  est facilis animi veniam delectus omnis.
                </p>
                <Link
                  className="relative py-2 px-4 rounded-full bg-transparent text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  href={"/product"}
                >
                  View More
                </Link>
                <h2 className="text-red-500 font-semibold py-6">$1092.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
