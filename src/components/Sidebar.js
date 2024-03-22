"use client";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard, RxSketchLogo } from "react-icons/rx";
import { GrGallery } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import Link from "next/link";

function Sidebar() {
  const links = [
    { icon: <RxDashboard size={20} />, link: "/dashboard/home" },
    { icon: <GoProjectSymlink size={20} />, link: "/dashboard/projects" },
    { icon: <HiOutlineShoppingBag size={20} />, link: "/dashboard/events" },
    { icon: <GrGallery size={20} />, link: "/dashboard/gallery" },
    { icon: <FiSettings size={20} />, link: "/dashboard/settings" },
  ];
  return (
    <>
      <div className="w-20 p-4">
        <div className="flex flex-col items-center">
          <Link href={""}>
            <p className="bg-blue-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </p>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {links.map((link) => (
            <div key={link.name}>
              <li className="list-none">
                <a
                  href={link.link}
                  className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block"
                >
                  {link.icon}
                </a>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
