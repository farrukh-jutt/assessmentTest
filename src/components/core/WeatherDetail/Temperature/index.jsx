import React from "react";

export default function Temperature({ weatherDetails }) {
  return (
    <div className="flex justify-center items-center gap-[20px]">
      <h1 className="text-[30px] text-green-300">{weatherDetails?.city?.toUpperCase()} </h1>
      <p className="text-[36px] text-green-300 font-[600]">{weatherDetails.temp}°</p>
    </div>
  );
}
