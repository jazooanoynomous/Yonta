import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Essentials = ({ box, handleDelete, handleEdit }) => {
  return (
    <div className="mb-4">
      {/* Content Container */}
      <div className="p-4 border flex items-center rounded-lg h-[114px] w-[191px] bg-[#F1F4FA]">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <img
            src='images/diet.png' // Ensure you provide a valid image URL or path
            alt="Essentials"
            className="w-[70px] h-[70px] object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="px-2">
          <h3 className="text-[16px] font-bold mb-1">Collagen(1)</h3>
          <div className="text-[12px] text-gray-700">Before Breakfast</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-2 gap-2 ml-auto justify-end">
        <button className="bg-[#FB5458] p-2 rounded-lg flex items-center" onClick={() => handleDelete()}>
          <FaTrash className="text-white" />
        </button>
        <button className="bg-[#1782AF] p-2 rounded-lg flex items-center gap-1" onClick={() => handleEdit(box)}>
          <FaEdit className="text-white" />
          <span className="text-white text-xs">Edit</span>
        </button>
      </div>
    </div>
  );
};

export default Essentials;
