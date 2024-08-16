import React from "react";
export default function DetailCard({ value, label }) {
  return (
    <div className="w-[100%] p-4 bg-slate-100 rounded-md mt-4 shadow-lg">
      <p className="text-[24px] text-green-300 font-[600]">{value}</p>
      <h3 className=" text-green-300 text-[18px]">{label}</h3>
    </div>
  );
}
