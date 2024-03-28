import DashbordLayout from "@/components/DashbordLayout";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import React from "react";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("@/components/BarChart"));
const Calender = dynamic(() => import("@/components/Calender"));

export default function Home() {
  return (
    <DashbordLayout>
      <main className=" bg-gray-200  h-f w-full">
        <Header />

        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-2">
            <BarChart />
            <Calender />
          </div>
          <RecentOrders />
          {/* <VaccantList /> */}
        </div>
      </main>
    </DashbordLayout>
  );
}
