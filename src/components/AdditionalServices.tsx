import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { FcOnlineSupport } from "react-icons/fc";

function AdditionalServices() {
  return (
    <div className="bg-orange-200 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="flex items-center justify-center py-6">
          <div className="">
            <div className="flex items-center justify-center">
              <TbTruckDelivery size="5rem" />
            </div>
            <h1 className="text-center font-bold ">Fast & Free Delivery</h1>
            <p className="text-gray-600">Free delivery on all orders</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <div className="">
            <div className="flex items-center justify-center">
              <MdPayment size="5rem" />
            </div>
            <h1 className="text-center font-bold ">Secure Payment</h1>
            <p className="text-gray-600">Free delivery on all orders</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <div className="">
            <div className="flex items-center justify-center">
              <RiRefund2Fill size="5rem" />
            </div>
            <h1 className="text-center font-bold ">Money Back Guarantee</h1>
            <p className="text-gray-600">Free delivery on all orders</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <div className="">
            <div className="flex items-center justify-center">
              <FcOnlineSupport size="5rem" />
            </div>
            <h1 className="text-center font-bold ">Online Support</h1>
            <p className="text-gray-600">Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalServices;
