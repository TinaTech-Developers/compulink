"use client";
import DashbordLayout from "@/components/DashbordLayout";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import VaccantUpload from "../components/VaccantUpload";
import VaccantList from "../components/VaccantList";
// import Uploads from "../components/Upload";

function Settings() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <DashbordLayout>
      <div className="flex flex-col w-full">
        <Header />

        <div className="flex flex-col  top-0  ">
          <div className=" flex items-center z-20 ">
            <Link
              onClick={() => updateToggle(1)}
              href={""}
              className="flex items-center justify-center gap-1 py-2 px-2 md:px-5 hover:bg-white focus:outline-none focus:bg-white focus:text-blue-700"
            >
              Vacancies
            </Link>{" "}
            <Link
              onClick={() => updateToggle(2)}
              href={""}
              className="py-2 px-2 md:px-5 hover:bg-white focus:outline-none focus:bg-white active: focus:text-blue-700 "
            >
              Applications
            </Link>
            <Link
              onClick={() => updateToggle(3)}
              href={""}
              className="py-2 px-2 md:px-5 hover:bg-white focus:outline-none focus:bg-white active: focus:text-blue-700 "
            >
              Users
            </Link>
          </div>
          <div className="">
            <div className={toggle == 1 ? "block " : "hidden "}>
              <VaccantUpload />
            </div>
            <div className={toggle == 2 ? "block" : "hidden"}>
              <div className="p-6">
                <VaccantList />
              </div>
            </div>
            <div className={toggle == 3 ? "block" : "hidden"}>
              {/* <Uploads /> */}
            </div>
          </div>
        </div>
      </div>
    </DashbordLayout>
  );
}

export default Settings;
