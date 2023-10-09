import React from "react";
import FillButton from "./FillButton";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex bg-orange-200 w-52 h-full mx-2  ">
      <div>
        <div className="items-center justify-center border-b-2 border-orange-700 w-[100%] ">
          <h1 className="text-center text-sm font-semibold uppercase px-10 py-5">
            Products Categories
          </h1>
        </div>
        <div className="border-b-2 border-orange-700">
          <div className="flex justify-between px-12">
            <input type="radio" value={"Computers"} name="Category" />
            <h2 className="text-center py-2">Computers</h2>
          </div>
          <div className="flex justify-between px-12 ">
            <input type="radio" value={"Computers"} name="Category" />
            <h2 className="text-center py-2">Printers</h2>
          </div>
          <div className="flex justify-between px-12 ">
            <input type="radio" value={"Computers"} name="Category" />
            <h2 className="text-center py-2">Networking</h2>
          </div>

          <Link
            href={""}
            className=" text-white bg-orange-700 px-4 py-2 flex items-center justify-center mx-10 my-4 hover:bg-transparent hover:text-orange-700"
          >
            Purchase
          </Link>
        </div>

        <div className="border-b-2 border-orange-700">
          <h1 className="px-4 font-semibold">Others</h1>
          <div className="grid">
            <Link className="px-6 py-2" href={""}>
              Software
            </Link>
            <Link className="px-6 py-2" href={""}>
              Hardware Maintenance
            </Link>
            <Link className="px-6 py-2" href={""}>
              Server Configuration
            </Link>
            <Link className="px-6 py-2" href={""}>
              Software
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
