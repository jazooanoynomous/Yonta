import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const MuscleModalSmall = ({ isOpen, onClose, onAddMuscleType }) => {
  const [type, setType] = useState("Football");


  const handleSave = () => {
    if (type ) {
      onAddMuscleType({ type });
      setType("Football");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[297px] h-[183px] shadow-lg p-6 relative">
        <div className="flex flex-col">
         

          {/* Muscle Type Section */}
          <label className="text-gray-700 font-semibold mb-2 text-left">
            Muscle Group 
          </label>
          <input
            type="text"
            placeholder="Player Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full h-[50px] p-2 mb-4 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Save Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
            onClick={handleSave}
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuscleModalSmall;
