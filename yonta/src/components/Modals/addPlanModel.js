import React from 'react';
import { FaSave } from "react-icons/fa";

const AddPlanModal = ({ isModalOpen, toggleModal, newPlanTitle, setNewPlanTitle, handleSave }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl shadow-lg w-[448px] h-[187px] ">
        <h2 className="text-lg mb-2">Plan Category</h2>
        <input
          type="text"
          className="border p-4 rounded mb-4 bg-[#F1F4FA] w-[318px] h-[50px]"
          placeholder="Special Diet plan"
          value={newPlanTitle}
          onChange={(e) => setNewPlanTitle(e.target.value)}
        />
        <div className="flex justify-start gap-2 mb-2">
          <button
            className="bg-textgreen text-white w-[100.44px] h-[40px] rounded-lg flex items-center justify-center"
            onClick={handleSave}
          >
            <FaSave className="mr-2" />
            Save
          </button>
          <button onClick={toggleModal} className="bg-gray-300 p-2 rounded w-[100.44px] h-[40px]">
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddPlanModal;
