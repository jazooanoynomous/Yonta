import React, { useState, useEffect } from 'react';

const steps = [
  { label: 'Confirmed order', icon: '🛒' },
  { label: 'Processing order', icon: '🔄' },
  { label: 'Product dispatched', icon: '🎁' },
  { label: 'On delivery', icon: '🚚' },
  { label: 'Product delivered', icon: '✅' },
];

export const OrderTrackingCard = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(data.currentStep);

  // Optional: Simulate the progress of the order status (you can remove this)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    }, 2000); // Change step every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-lg h-[420px] rounded-lg p-6 mt-6">
      <div className="flex items-start">
        {/* Image and Item Name Section */}
        <div className="flex items-start w-1/2">
          <img
            src="https://via.placeholder.com/100" // Replace with actual image URL
            alt="product"
            className="w-20 h-20 object-cover rounded-md"
          />
          <div className="ml-4 flex flex-col justify-between">
            <h2 className="font-bold text-lg">{data.itemName}</h2>
            <p className="text-sm text-gray-600">{data.itemName}</p>
          </div>
        </div>

        {/* Quantity and Price Section */}
        <div className="w-1/2 text-right">
          <p className="text-lg font-semibold">Quantity: {data.quantity}</p>
          <p className="text-lg font-semibold">Price: ₹{data.price}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-gray-600">Tracking</p>
        <div className="relative mt-4">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col pl-5 items-center">
                <div
                  className={`${
                    index <= currentStep ? 'bg-buttonblue' : 'bg-gray-300'
                  } rounded-full h-12 w-12 flex items-center justify-center text-white relative`}
                >
                  {step.icon}
                </div>
                <p className="mt-2 text-xs text-center">{step.label}</p>
              </div>
            ))}
          </div>
          {/* Horizontal progress line */}
          <div className="absolute inset-x-0 top-6 h-1 bg-gray-300">
            <div
              className="h-full bg-buttonblue"
              style={{
                width: `${(currentStep / (steps.length - 1)) * 100}%`,
                transform: 'translateX(-50%)', // Center the line on the icons
              }}
            ></div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-4 text-gray-600">
          <p>Shipped via: {data.shippedVia}</p>
          <p>Tracking ID: {data.trackingId}</p>
        </div>
      </div>
    </div>
  );
};
