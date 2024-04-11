"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

function Header() {
  const signOutUrl = "/dashboard";
  const { data: session } = useSession();
  return (
    <div className="flex justify-between px-4 py-6 w-full border-b-2 border-white bg-gray-100  ">
      <h1 className="font-bold">Dashboard</h1>

      <div className="flex flex-col items-center ">
        <h1>
          Welcome Back, <span className="font-bold">{session?.user?.name}</span>
        </h1>
        {/* <Link href={"/dashboard"}> */}
        <button
          onClick={() => signOut({ callbackUrl: signOutUrl })}
          className="text-red-400 text-sm hover:text-red-800"
        >
          SignOut
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Header;
