import React from "react";
import Image from "next/image";
import Link from "next/link";

function NotificationsCard() {
  return (
    <>
      <div className="flex gap-14 items-center mx-16 my-6 border-b-2 pb-6">
        <div className="py-4">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="notifications"
            height={50}
            width={50}
            className="rounded-full absolute"
          />
          <div className="w-5 h-5 bg-orange-700 translate-x-10 rounded-full translate-y-8 ">
            <h1 className="text-white text-sm text-center">10</h1>
          </div>
        </div>

        <Link href={""} className=" relative translate-y-4 hover:">
          <span className="text-gray-600">Hi,</span> Tinashe P. Compulink
          Systems
          <span className="text-gray-600"> is selling servers on credit</span>
        </Link>
      </div>
    </>
  );
}

export default NotificationsCard;
