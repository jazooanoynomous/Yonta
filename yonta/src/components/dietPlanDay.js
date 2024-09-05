import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { GiMeat, GiWheat, GiOlive } from 'react-icons/gi';

const DietPlanDay = ({ box, handleDelete, handleEdit }) => {
  return (
    <div className="mb-4">
      <div className="p-4 border rounded-lg h-[150px] w-[296px] bg-[#F1F4FA]">
        <h2 className="text-lg font-bold">Breakfast - 350 Cal</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <img src="/images/carb.png" alt="Protein" className="w-4 h-4 mr-1" />
            <span className="text-sm text-[#7000FF] flex items-center">
              Carbs <b className="ml-1 text-black">7g</b>
            </span>
          </div>
          <div className="flex items-center">
            <img src="/images/protien.png" alt="Carbs" className="w-4 h-4 mr-1" />
            <span className="text-sm text-[#AA170C] flex items-center">
              protien <b className="ml-1 text-black">7g</b>
            </span>
          </div>
          <div className="flex items-center">
            <img src="/images/fat.png" alt="Fats" className="w-4 h-4 mr-1" />
            <span className="text-sm text-[#FF9910] flex items-center">
              Fats <b className="ml-1 text-black">7g</b>
            </span>
          </div>
        </div>
        <p> 2 Eggs Ommeltes</p>
        <p> 2 Slice whole graine Bread</p>

        {/* <button className="bg-[#5D4CFF] text-white px-3 rounded-lg">
          Calories: 3000
        </button> */}
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

export default DietPlanDay;
