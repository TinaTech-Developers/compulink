import React from "react";
import Card from "./Card";

function Suggestions() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold py-10">
        Products You May Like
      </h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        incidunt magni possimus <br /> cum vel nulla sapiente, hic dolore
        voluptas. Exercitationem, sunt.
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <Card
          img={
            "https://i0.wp.com/laptopzone.co.zw/wp-content/uploads/2023/04/HP-Laptop-15s-3.png?fit=540%2C540&ssl=1"
          }
          name={"Laptop"}
          desc={"HP Pavilion 15, Core i5 10th gen"}
          price={"$123.45"}
        />
        <Card
          img={
            "https://i0.wp.com/laptopzone.co.zw/wp-content/uploads/2023/04/HP-Laptop-15s-3.png?fit=540%2C540&ssl=1"
          }
          name={"Laptop"}
          desc={"HP Pavilion 15, Core i5 10th gen"}
          price={"$123.45"}
        />
        <Card
          img={
            "https://i0.wp.com/laptopzone.co.zw/wp-content/uploads/2023/04/HP-Laptop-15s-3.png?fit=540%2C540&ssl=1"
          }
          name={"Laptop"}
          desc={"HP Pavilion 15, Core i5 10th gen"}
          price={"$123.45"}
        />
        <Card
          img={
            "https://i0.wp.com/laptopzone.co.zw/wp-content/uploads/2023/04/HP-Laptop-15s-3.png?fit=540%2C540&ssl=1"
          }
          name={"Laptop"}
          desc={"HP Pavilion 15, Core i5 10th gen"}
          price={"$123.45"}
        />
      </div>
    </div>
  );
}

export default Suggestions;
