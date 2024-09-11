import React from 'react';

const MetricCard = ({ title, value, change, description, bgColor }) => (
  <div className={`${bgColor ? bgColor : 'bg-backgroundgray'} w-[195px] h-[108px] shadow-md rounded-lg p-2`}>
    <h2 className="text-black font-semibold text-[14px]">{title}</h2>
    <h2 className="text-[28px] text-bluetext font-semibold">{value}</h2>
    <div className='flex space-x-2'>
      <p className="text-[10px] text-green">{change}</p>
      <p className="text-[10px] text-textGray">{description}</p>
    </div>
  </div>
);

export default MetricCard;