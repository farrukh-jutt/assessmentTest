import React from "react";
import DetailCard from "./DetailCard";


export default function MainCard({ weatherDetails }) {
  return (
    <div className="p-4 bg-slate-200 flex rounded-md mt-6 w-[100%] items-center justify-center flex-col">
      <h1 className="text-green-600 font-bold">TODAY'S FORCAST</h1>
      <div className="flex w-[50%] gap-6 flex-col ">
        <DetailCard label="Humidity" value={weatherDetails.humidity} />
        <DetailCard label="Wind Speed" value={weatherDetails.windSpeed} />
      </div>
    </div>
  );
}
