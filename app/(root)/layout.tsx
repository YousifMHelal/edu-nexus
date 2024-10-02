import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div
        className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-auto "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={28} height={28} />
          <span className="hidden lg:block font-bold">EduNexus</span>
        </Link>
        <Sidebar />
      </div>

      {/* NAVBAR AND CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-background flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
