import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { GiMeat, GiWheat, GiOlive } from 'react-icons/gi';

const DietPlanBox = ({ box, handleDelete, handleEdit }) => {
  return (
    <div className="mb-4">
      <div className="p-4 border rounded-lg h-[110px] w-[296px] bg-[#F1F4FA]">
        <h2 className="text-lg font-bold">Calorie Deficit Plan</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <GiMeat className="w-4 h-4 mr-1 text-[#7000FF]" />
            <span className="text-sm text-[#7000FF] flex items-center">
              Protein <b className="ml-1 text-black">7g</b>
            </span>
          </div>
          <div className="flex items-center">
            <GiWheat className="w-4 h-4 mr-1 text-[#AA170C]" />
            <span className="text-sm text-[#AA170C] flex items-center">
              Carbs <b className="ml-1 text-black">7g</b>
            </span>
          </div>
          <div className="flex items-center">
            <GiOlive className="w-4 h-4 mr-1 text-[#FF9910]" />
            <span className="text-sm text-[#FF9910] flex items-center">
              Fats <b className="ml-1 text-black">7g</b>
            </span>
          </div>
        </div>
        <button className="bg-[#5D4CFF] text-white px-3 rounded-lg">
          Calories: 3000
        </button>
      </div>

      <div className="flex mt-2 gap-2 ml-auto justify-end">
        <button className="bg-[#FB5458] p-2 rounded-lg flex items-center" onClick={() => handleDelete(box)}>
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

export default DietPlanBox;
