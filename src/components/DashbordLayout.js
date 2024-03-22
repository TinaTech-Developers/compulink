import React from "react";
import Sidebar from "./Sidebar";
import { AuthProvider } from "@/app/dashboard/Providers";
export default function DashbordLayout({ children }) {
  return (
    <AuthProvider>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        {children}
      </div>
    </AuthProvider>
  );
}
