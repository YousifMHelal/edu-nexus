"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#f4f7fc",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#e74c3c",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#3498db",
  },
];

const CountChart = () => {
  return (
    <div className="bg-background rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-chart-3 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-card-foreground">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-chart-4 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-card-foreground">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
