"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
function Header() {
  const signOutUrl = "/dashboard";
  const { data: session } = useSession();

  return (
    <div className="grid md:flex md:justify-between gap-4 px-4 py-6 w-full border-b-2 border-white bg-gray-400  ">
      <h1 className="font-bold text-3xl">Dashboard</h1>

      <div className="flex flex-col  ">
        <h1>
          Welcome Back,
          <span className="font-bold"> {session?.user?.email}</span>
        </h1>

        <button
          onClick={() => signOut({ callbackUrl: signOutUrl })}
          className="text-red-400 text-sm hover:text-red-300 pt-4 font-bold text-start md:text-end"
        >
          SignOut
        </button>
      </div>
    </div>
  );
}

export default Header;
