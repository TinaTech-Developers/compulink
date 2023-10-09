import Link from "next/link";
import React from "react";

interface MProps {
  name: String;
  link: any;
}
let FillButton: React.FC<MProps> = ({ name, link }) => {
  return (
    <div>
      <Link
        href={link}
        className="relative py-2 px-4 rounded-full bg-transparent text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
      >
        {name}
      </Link>
    </div>
  );
};

export default FillButton;
