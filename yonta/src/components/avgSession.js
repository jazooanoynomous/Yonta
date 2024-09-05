import React from 'react';

const AvgSessionDuration = () => {
  const data = [
    { month: 'Jan', duration: '23,400 m', progress: 80 },
    { month: 'Feb', duration: '15,000 m', progress: 50 },
    { month: 'Mar', duration: '30,000 m', progress: 90 },
    { month: 'Apr', duration: '22,000 m', progress: 75 },
    { month: 'May', duration: '10,000 m', progress: 30 },
    { month: 'Jun', duration: '23,400 m', progress: 80 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-gray-500 text-sm mb-4">Avg Session Duration</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{item.month}</span>
              <span>{item.duration}</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvgSessionDuration;
