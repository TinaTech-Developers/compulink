import FillButton from "@/components/FillButton";
import Image from "next/image";
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function Account() {
  return (
    <>
      <div className="flex items-center justify-center pt-28 bg-gray-500 w-full py-4">
        <div className="">
          <Image
            src={
              "https://cdn.dribbble.com/users/204025/screenshots/842087/login.gif"
            }
            height={600}
            width={400}
            alt="Account"
            className="border rounded-3xl w-72 h-96 object-cover "
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 py-10 px-6">
        <div className="grid grid-cols-3 py-10">
          <div></div>
          <div>
            <h1 className="  text-3xl font-bold text-orange-700">
              New Customer
            </h1>
            <p className="text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
              quae atque deleniti ducimus amet maiores, deserunt provident ea
              numquam eum!
            </p>
            <FillButton name={"Register"} link={`/account/register`} />
          </div>
        </div>
        <div className="grid grid-cols-1 divide-x-2 divide-orange-700">
          <div></div>
          <div className=" px-6 grid grid-cols-1 gap-4 ">
            <h1 className="pb-12 text-3xl font-bold text-orange-700">
              Existing Customer Login
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Eg:tinashephiri@gmail.com"
                className="py-2 col-span-2 bg-orange-200 rounded-lg px-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="py-2 col-span-2  bg-orange-200 rounded-lg px-4"
              />
            </div>
            <div className="flex items-center gap-4">
              <p>Show Password</p>
              <AiOutlineEyeInvisible size="1.2rem" />
            </div>
            <div className="flex items-end justify-end px-36">
              <FillButton name={"Sign In"} link={"/product"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
