import React from "react";

const PopularProduct = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-5">
      <h2 className="text-lg font-bold mb-4">Popular Product</h2>
      
      {/* Product Info Section */}
      <div className="flex items-center mb-4">
        <div className="bg-backgroundgray p-2 rounded-2xl">
        <img
          src="/images/1 (1).png" // Replace with your image URL
          alt="NitroTech Whey Protein"
          className="w-16 h-16 rounded-lg"
        />
        </div>
        <div className="ml-4">
          <h3 className="text-md font-semibold">NitroTech Whey Protein</h3>
          <p className="text-xl font-bold text-blue-600">₹ 4,299</p>
          <p className="text-sm text-gray-500">3956 units sold</p>
        </div>
      </div>

      {/* Sales Chart Section */}
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-gray-600 mb-2">Sales</p>
        <div className="relative">
          <svg
            viewBox="0 0 100 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20"
          >
            {/* Y-Axis values */}
            <text x="0" y="37" fill="#4B5563" fontSize="5" className="y-axis">3400</text>
            <text x="0" y="27" fill="#4B5563" fontSize="5" className="y-axis">3600</text>
            <text x="0" y="17" fill="#4B5563" fontSize="5" className="y-axis">3800</text>
            <text x="0" y="7" fill="#4B5563" fontSize="5" className="y-axis">4000</text>

            {/* Horizontal grid lines */}
            <line x1="10" y1="5" x2="100" y2="5" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="10" y1="15" x2="100" y2="15" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="10" y1="25" x2="100" y2="25" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="10" y1="35" x2="100" y2="35" stroke="#E5E7EB" strokeWidth="0.5" />

            {/* Polyline for the sales graph */}
            <polyline
              fill="none"
              stroke="#7F9CF5"
              strokeWidth="2"
              points="10,35 30,28 50,26 70,22 90,15 100,10"
            />

            {/* Circle for the last point */}
            <circle cx="100" cy="10" r="2" fill="#7F9CF5" />
          </svg>

          {/* Label positions (Y-axis and X-axis labels) */}
        </div>

        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>Last month</span>
          <span>This month</span>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
