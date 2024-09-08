import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ title, data }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h2 className=" text-base font-semibold mb-4">{title}</h2>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComponent;
