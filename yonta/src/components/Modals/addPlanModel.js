import React from 'react';

const AddPlanModal = ({ isModalOpen, toggleModal, newPlanTitle, setNewPlanTitle, handleSave }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[447px] h-[187px] ">
        <h2 className="text-2xl mb-4">Plan Category</h2>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4 bg-[#F1F4FA]"
          placeholder="Enter plan category name"
          value={newPlanTitle}
          onChange={(e) => setNewPlanTitle(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={toggleModal} className="bg-gray-300 p-2 rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue text-white p-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlanModal;
