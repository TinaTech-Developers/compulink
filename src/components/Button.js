import React from "react";
import Link from "next/link";

function Button({ link, name }) {
  return (
    <Link
      href={link}
      className="px-4 py-2  text-blue-600 border border-red-700 rounded-full mx-auto  -translate-x-44 hover:bg-red-700 hover:text-white"
    >
      {name}
    </Link>
  );
}

export default Button;
