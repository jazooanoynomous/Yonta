import React from 'react';

const MetricCard = ({ title, value, change, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-gray-500 text-sm">{title}</h2>
    <h1 className="text-2xl font-bold">{value}</h1>
    <p className="text-sm text-green-500">{change}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default MetricCard;
