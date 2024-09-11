import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow">
        <p className="text-sm font-semibold">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};
const BarChartComponent = ({ title, data }) => {
  return (
    <div className="w-[100%] bg-white p-6 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Jan 2020</span>
          <span className="text-sm text-gray-500">to</span>
          <span className="text-sm text-gray-500">Aug 2020</span>
          <button className="text-sm text-gray-500 border rounded px-2 py-1 hover:bg-gray-100">
            Monthly ▼
          </button>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000000}M`}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="value"
              fill="#5932EA"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(data, index) => {
                document
                  .querySelectorAll(".recharts-bar-rectangle")
                  .forEach((rect, i) => {
                    rect.style.opacity = i === index ? 1 : 0.3;
                  });
              }}
              onMouseLeave={() => {
                document
                  .querySelectorAll(".recharts-bar-rectangle")
                  .forEach((rect) => {
                    rect.style.opacity = 1;
                  });
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BarChartComponent;
