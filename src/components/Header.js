"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  const start = Date.toLocaleString();
  const { data: session } = useSession();
  return (
    <div className="flex justify-between px-4 py-6 w-full border-b-2 border-white bg-gray-100  ">
      <h1 className="font-bold">Dashboard</h1>
      <span className="text-gray-300" suppressHydrationWarning>
        {Date(start)}
      </span>

      <div className="flex flex-col items-center ">
        <h1>
          Welcome Back, <span className="font-bold">{session?.user?.name}</span>
        </h1>
        <Link href={"/dashboard"}>
          <button
            onClick={() => signOut()}
            className="text-red-400 text-sm hover:text-red-800"
          >
            SignOut
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
