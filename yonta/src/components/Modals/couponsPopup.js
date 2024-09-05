import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CouponsPopup = ({ discountTypes, onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click and navigation
  const handleClick = (route) => {
    navigate(route); // Navigate to the specified route
    onClose(); // Close the modal after navigation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[504px] h-[391px] rounded-[30px] p-6">
        <h3 className="text-[16px] py-3 font-semibold">Select Discount Type</h3>

        {/* Discount options */}
        <div className="space-y-4">
          {discountTypes.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.route)} // Handle click and pass route
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <div>
                <h4 className="text-[14px] font-medium">{item.title}</h4>
                <p className="text-[12px] text-gray-500">{item.description}</p>
              </div>
              <FaArrowRight className="text-gray-400" />
            </div>
          ))}
        </div>

        {/* Cancel button */}
        <div className="mt-6 text-end px-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-buttonblue text-white rounded-lg hover:bg-purple-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponsPopup;
