import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between h-24 bg-orange-200 w-full fixed z-30">
        <div className="flex items-center justify-center border border-x-2  border-orange-700 py-2 px-2 bg-orange-700 ">
          <div className="border border-x-2 border-white py-6 pb-4 justify-center mt-10">
            <h1 className="font-semibold text-5xl text-center ">Logo</h1>
          </div>
        </div>
        <div className="font-semibold">
          <Link className="p-4 hover:text-white" href={"/"}>
            Home
          </Link>
          <Link className="p-4 hover:text-white" href={"/product"}>
            Product
          </Link>
          <Link className="p-4 hover:text-white" href={"/about"}>
            About
          </Link>

          <Link className="p-4 hover:text-white" href={"/blog"}>
            Blog
          </Link>
          <Link className="p-4 hover:text-white" href={"/contact"}>
            Contact
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border-b-2 border-black outline-none py-1 rounded"
          />
        </div>
        <Link href={"/account"} className="font-semibold hover:text-white ">
          Login | Register
        </Link>
        <div className="font-bold p-6">
          <AiOutlineShopping size="2.5rem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
