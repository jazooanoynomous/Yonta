import React from "react";

const MetricCard = ({ title, value, change, description, bgColor }) => (
  <div
    className={`${
      bgColor ? bgColor : "bg-backgroundgray"
    } w-[150px] lg:w-[168px] h-[108px] shadow-md rounded-lg  p-1  lg:p-4`}
  >
    <h2 className="text-black text-[14px]">{title}</h2>
    <h2 className="text-[28px] lg:text-[20px] text-bluetext font-semibold">
      {value}
    </h2>
    <div className="flex space-x-2">
      <p className="text-[10px] text-green">{change}</p>
      <p className="text-[10px] text-textGray">{description}</p>
    </div>
  </div>
);

export default MetricCard;
