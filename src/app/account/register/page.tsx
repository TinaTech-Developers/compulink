import Image from "next/image";
import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div className="py-36">
      <h1 className="text-center text-2xl capitalize font-mono font-bold text-orange-700">
        Please provide Your Details
      </h1>
      <div className="h-full py-8 my-8 w-full flex justify-center items-center">
        <div className="h-full w-2/3 md:w-2/4 p-8 rounded-lg flex items-center justify-center bg-orange-200">
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex items-center justify-center">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2hX38B7GAB9ArY_VfjF3nY1tk8tOsdg0oQ&usqp=CAU"
                }
                alt=""
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>
            <label className="text-xl font-mono font-bold uppercase text-center">
              Create Account{" "}
            </label>
            <div className="grid grid-cols-4 gap-4 ">
              <label>Username</label>
              <input
                className="py-2 col-span-3 rounded-lg bg-gray-300"
                type="text"
                name="name"
                required
              />
            </div>
            <div className=" grid grid-cols-4 gap-4">
              <label>Email</label>
              <input
                className="py-2  col-span-3 rounded-lg bg-gray-300"
                type="email"
                name="eamil"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <label>Password</label>
              <input
                className="py-2 col-span-3 rounded-lg bg-gray-300"
                type="password"
                name="password"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 ">
              <label>Confirm Password</label>
              <input
                className="py-2 col-span-3 rounded-lg bg-gray-300"
                type="password"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                href={"/account"}
                className="py-2 px-4 bg-red-500 rounded-lg hover:bg-red-700 hover:text-white hover:rounded-none hover:duration-500"
              >
                Cancel
              </Link>
              <Link
                href={"/account/user"}
                className="py-2 px-4 bg-green-500 hover:bg-green-700 hover:text-white hover:rounded-lg hover:duration-500"
              >
                Confirm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
