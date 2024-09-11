import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', value: 150000000 },
  { name: 'Feb', value: 180000000 },
  { name: 'Mar', value: 170000000 },
  { name: 'Arl', value: 140000000 },
  { name: 'Jun', value: 250342123 },
  { name: 'July', value: 220000000 },
  { name: 'Aug', value: 200000000 },
  { name: 'Stp', value: 190000000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow">
        <p className="text-sm font-semibold">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const BarChartC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Revenue Overview</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Jan 2020</span>
          <span className="text-sm text-gray-500">to</span>
          <span className="text-sm text-gray-500">Aug 2020</span>
          <button className="text-sm text-gray-500 border rounded px-2 py-1 hover:bg-gray-100">Monthly ▼</button>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              interval={0}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000000}M`}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="value"
              fill="#5932EA"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(data, index) => {
                document.querySelectorAll('.recharts-bar-rectangle').forEach((rect, i) => {
                  rect.style.opacity = i === index ? 1 : 0.3;
                });
              }}
              onMouseLeave={() => {
                document.querySelectorAll('.recharts-bar-rectangle').forEach((rect) => {
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

export default BarChartC;