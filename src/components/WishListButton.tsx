import React from "react";
import Link from "next/link";

interface WProps {
  name: String;
  link: any;
}

let WishListButton: React.FC<WProps> = ({ name, link }) => {
  return (
    <div className="w-48 bg-orange-300 mx-2 text-center  hover:bg-orange-700 my-4 hover:rounded-full hover:transition-all duration-500 py-1">
      <Link href={link} className="py-2  w-[80%]   text-center">
        {name}
      </Link>
    </div>
  );
};
export default WishListButton;
