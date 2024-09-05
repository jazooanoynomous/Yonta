import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative w-[287px] bg-gray-200 rounded-full h-[18px]">
      <div
        className="absolute top-0 left-0 h-[18px] bg-blue rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export  default ProgressBar;