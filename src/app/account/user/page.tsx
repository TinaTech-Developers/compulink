import FillButton from "@/components/FillButton";
import Image from "next/image";
import React from "react";

function User() {
  return (
    <div className="ml-20 mt-10">
      <div className="flex  ">
        <div className="">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
            height={150}
            width={150}
            className="rounded-full "
          />
        </div>
        <div className="mx-6 mt-6">
          <h1 className="text-xl font-bold py-2">Tinashe T. Phiri</h1>
          <p className="text-gray-500">Springvale, Ruwa</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="grid mx-20 my-10">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
            />
          </div>
          <div className="grid mx-20 my-10">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
              placeholder=""
            />
          </div>
          <div className="grid mx-20 my-10">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <div className="grid mx-20 my-10">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
              placeholder=""
            />
          </div>
          <div className="grid mx-20 my-10">
            <label>Phone Number</label>
            <input
              type="text"
              name="surname"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
              placeholder=""
            />
          </div>
          <div className="grid mx-20 my-10">
            <label>Postal Code</label>
            <input
              type="text"
              name="surname"
              className="py-2 col-span-3  bg-gray-200 my-2 rounded-xl px-4 shadow-black"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center translate-x-64 py-10">
          <FillButton name={"Save Changes"} link={"/account/user"} />
        </div>
      </div>
    </div>
  );
}

export default User;
