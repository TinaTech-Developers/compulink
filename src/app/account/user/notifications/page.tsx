import NotificationsCard from "@/components/NotificationsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-[95%] border rounded-lg shadow rounder h-full">
        <div className="border-b-2 border-gray-600 w-[90%] mx-[5%]">
          <h1 className="text-2xl font-bold px-8  py-4">Notifications</h1>
        </div>
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
        <NotificationsCard />
      </div>
    </div>
  );
}

export default Notifications;
