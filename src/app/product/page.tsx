import PCard from "@/components/PCard";
import React from "react";

async function Product() {
  // console.log(data);
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold pb-4 ">Computers</h1>
      <div className="  py-5 ">
        <PCard />
      </div>
    </div>
  );
}

export default Product;
