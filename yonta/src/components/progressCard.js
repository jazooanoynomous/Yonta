import React from 'react';
import ProgressBar from './progressBar'; // Assuming ProgressBar is in the same directory

const BuyersCard = () => {
  const totalBuyers = 6065;
  const nonSubscribedBuyers = 5179;
  const subscribedBuyers = 894;

  const calculatePercentage = (value) => (value / totalBuyers) * 100;
  const nonSubscribedPercentage = calculatePercentage(nonSubscribedBuyers);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[335px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-medium">Buyers</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <div className="text-2xl font-bold">{totalBuyers.toLocaleString()}</div>
        <div className="text-xs text-gray-500">Total</div>
      </div>
      <div className="mt-4">
        <ProgressBar progress={nonSubscribedPercentage} />
      </div>
      <div className="mt-2 flex justify-between text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue mr-2"></div>
          <span>{nonSubscribedBuyers.toLocaleString()} Non Subscribed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
          <span>{subscribedBuyers.toLocaleString()} Subscribed</span>
        </div>
      </div>
    </div>
  );
};

export default BuyersCard;