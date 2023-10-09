import React from "react";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

function UserSideBar() {
  return (
    <div className="flex bg-gray-200  w-52 h-full mx-2">
      <div>
        <div className="border-b-2 border-white">
          <h1 className="text-center text-[1rem] font-mono font-semibold uppercase px-10 py-5">
            User Profile
          </h1>
        </div>
        <div className="px-5">
          <div className="py-4 font-mono grid grid-cols-4 gap-1">
            <AiOutlineUser size="1.2rem" />
            <Link href={"/account/user"}>UserInfo</Link>
          </div>
          <div className="py-4 font-mono grid grid-cols-4 gap-1">
            <FcLike size="1.2rem" />
            <Link href={"/account/user/favorites"}>Favorites</Link>
          </div>
          <div className="py-4 font-mono grid grid-cols-4 gap-1">
            <AiOutlineStar size="1.2rem" />
            <Link href={"/account/user/watchlist"}>Watchlist</Link>
          </div>
          <div className="py-4 font-mono grid grid-cols-4 gap-1">
            <FcSettings size="1.2rem" />
            <Link href={"/account/user/settings"}>Settings</Link>
          </div>
          <div className="py-4 font-mono grid grid-cols-4 gap-1">
            <MdNotificationsActive size="1.2rem" />
            <Link href={"/account/user/notifications"}>Notifications</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSideBar;
