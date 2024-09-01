import React, { useState } from "react";
import { expertsTypeData } from "../../components/Datas";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const AddExpertsModal = ({ isOpen, onClose }) => {
  const [newExpert, setNewExpert] = useState("");

  const handleAddExpert = () => {
    if (newExpert.trim()) {
      expertsTypeData.push({ id: expertsTypeData.length + 1, name: newExpert });
      setNewExpert("");
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className="bg-white rounded-lg shadow-lg w-[670px] h-[351px] p-6 flex">
        {/* Left Column */}
        <div className="w-1/2 pr-4 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Add Expert Category</h3>
          <input
            type="text"
            placeholder="Enter here"
            value={newExpert}
            onChange={(e) => setNewExpert(e.target.value)}
            className="w-full h-[54px] p-2 border border-gray-300 rounded-[10px] mb-4"
          />
          <button
            onClick={handleAddExpert}
            className="w-full h-[40px] bg-blue text-white font-bold rounded-[10px]"
          >
            Add
          </button>
        </div>
        
        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 h-full" />

        {/* Right Column */}
        <div className="w-1/2 pl-4 flex flex-col">
          <h3 className="text-lg font-medium mb-2">Expert Category List</h3>
          <ul>
            {expertsTypeData.map((expert) => (
              <li
                key={expert.id}
                className="flex items-center mb-2"
              >
                <span className="font-bold">{expert.name}</span>
                <div className="flex space-x-2 ml-auto">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded bg-blue flex items-center justify-center"
                  >
                    <FiEdit />
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded bg-red flex items-center justify-center"
                  >
                    <FiTrash2 />
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddExpertsModal;
