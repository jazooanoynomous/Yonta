import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Fitness', value: 190000000 },
  { name: 'Ingredients', value: 250000000 },
  { name: 'Yoga', value: 180000000 },
  { name: 'Agility', value: 200000000 },
];

const BarChartComponent = () => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-gray-500 text-sm mb-4">Clicks</h2>
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
