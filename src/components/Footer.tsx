import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#202A44] ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center text-white py-10">
          <h1 className="text-center pt-10 text-xl font-bold uppercase">
            Compu<span className="text-red-800">link</span>
          </h1>
          <p className="px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit
            qui minus totam, cumque quod soluta nobis labore, voluptas
            asperiores recusandae! Assumenda, facilis. Aperiam, eaque pariatur
            dignissimos quam cumque maiores?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          <div className="py-10">
            <h1 className="text-center text-white font-semibold pt-10 pb-4 uppercase text-xl">
              Quick Links
            </h1>
            <div className="grid text-center">
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Products
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Services
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                About
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Contact
              </Link>
            </div>
          </div>
          <div className="py-10">
            <h1 className="text-center text-white font-semibold pt-10 pb-4">
              Shop Category
            </h1>
            <div className="grid text-center">
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Computers
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Printers
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Consumables
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Servers
              </Link>
            </div>
          </div>
          <div className="py-10">
            <h1 className="text-center text-white font-semibold pt-10 pb-4">
              Partners
            </h1>
            <div className="grid text-center">
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                FuserTech
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Copier Parts
              </Link>
              <Link className="hover:text-orange-500 hover:text" href={"/"}>
                Compulink Byo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-gray-400">
          Copyright ©2023 All rights reserved{" "}
          <Link className="text-white" href={"www.compulink.co.zw"}>
            Compulink
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
