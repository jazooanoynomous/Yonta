import React from 'react';

const MetricCard = ({ title, value, change, description }) => (
  <div className="bg-backgroundgray w-[195px] h-[108px] shadow-md rounded-lg p-4">
    <h2 className="text-black text-[14px]">{title}</h2>
    <h2 className="text-[32px] font-bold">{value}</h2>
    <div className='flex space-x-2'>
    <p className="text-[10px] text-green">{change}</p>
    <p className="text-[10px] text-textGray">{description}</p>
    </div>
    
  </div>
);

export default MetricCard;
