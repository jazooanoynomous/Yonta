import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const StatsCard = ({ title, total, data, backgroundColor }) => {
  const COLORS = ["#FF69B4", "#4169E1", "#9370DB", "#20B2AA"];

  return (
    <div
      className={`${
        backgroundColor ? backgroundColor : "bg-backgroundgray"
      } p-4 rounded-lg shadow-sm`}
      style={{ width: "198px", height: "230px" }}
    >
      {" "}
      <h2 className="text-[14px] font-bold text-bluetext mb-2">{title}</h2>
      <p className="text-[32px] font-bold text-bluetext mb-4">
        {total.toLocaleString()}
      </p>
      <div className="flex space-x-2">
        <div>
          <PieChart width={70} height={70}>
            <Pie
              data={data}
              cx={35} // 86 / 2
              cy={35} // 86 / 2
              innerRadius={20} 
              outerRadius={30} 
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="mt-4 overflow-y-auto" style={{ maxHeight: "120px" }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex space-x-1 text-[10px] text-blacktext mb-1"
            >
              <div className="flex items-center">
                <div
                  className="w-[10px] h-[10px] rounded-[2px] mr-2 bg-white"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span>{item.name}</span>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
