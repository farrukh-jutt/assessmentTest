import React from "react";
import Temperature from "./Temperature";
import MainCard from "./MainCard";

export default function WeatherDetails({
  weatherDetails,
}) {
  return (
    <div className="mt-[100px] ">
      {/*  Main Temperature Component */}
      <Temperature weatherDetails={weatherDetails} />
      <MainCard weatherDetails={weatherDetails} />
    </div>
  );
}
