import React from 'react';

const Users = () => {
  const totalUsers = 6065;
  const onlineUsers = 5170;
  const offlineUsers = totalUsers - onlineUsers;
  
  // Calculate percentages for the progress bars
  const onlinePercentage = (onlineUsers / totalUsers) * 100;
  const offlinePercentage = (offlineUsers / totalUsers) * 100;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-gray-500 text-sm mb-4">Users</h2>
      <div className="text-4xl font-bold">{totalUsers}</div>
      <div className="text-gray-500 text-sm mb-4">Total</div>

      {/* Online users */}
      <div className="flex justify-between mb-1">
        <span className="text-sm">Online Users</span>
        <span className="text-sm">{onlineUsers}</span>
      </div>
      {/* Online Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-purple-600 h-2.5 rounded-full"
          style={{ width: `${onlinePercentage}%` }}
        ></div>
      </div>

      {/* Offline users */}
      <div className="flex justify-between mb-1">
        <span className="text-sm">Offline Users</span>
        <span className="text-sm">{offlineUsers}</span>
      </div>
      {/* Offline Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-400 h-2.5 rounded-full"
          style={{ width: `${offlinePercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Users;
