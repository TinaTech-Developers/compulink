import React from "react";
import Image from "next/image";
import FillButton from "./FillButton";
import WishListButton from "./WishListButton";

async function getData() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function PCard() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 shadow-2xl ">
      {data.map((item: any) => (
        <div key={item.id} className="px-7">
          <div className="w-48 h-48 flex">
            <Image
              src={item.images[0]}
              alt="product"
              height={400}
              width={400}
              className="flex mx-2 py-2 object-cover"
            />
          </div>
          <h1 className="m-2 font-semibold">{item.title}</h1>
          <div className="flex items-center justify-between m-2">
            <p className="font-semibold text-red-400">${item.price}</p>
            <FillButton name={"Add To Cart"} link={""} />
          </div>
          <WishListButton name={"Add To Wish List"} link={""} />
        </div>
      ))}
    </div>
  );
}

export default PCard;
