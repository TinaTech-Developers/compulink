import Image from "next/image";
import React from "react";
import Link from "next/link";

interface IProps {
  img: any;
  desc: String;
  price: String;
  name: String;
}

let Card: React.FC<IProps> = ({ img, desc, price, name }) => {
  return (
    <div className="border border-orange-700 rounded-lg w-72 my-10 mx-5">
      <div>
        <Image src={img} alt="" height={300} width={300} />
      </div>
      <div className="bg-orange-700 rounded-b-lg py-4 hover:bg-white ">
        <Link
          className="mx-2 text-2xl uppercase font-semibold text-white hover:text-black"
          href={"/"}
        >
          {name}
        </Link>
        <p className="mx-2">{desc}</p>
        <div className="flex items-center justify-between mx-3 my-2">
          <p className="text-gray-300 mx-2">{price}</p>
          <Link
            href={"/product"}
            className="bg-white px-4 py-2 rounded-lg hover:bg-orange-700 hover:text-white"
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
