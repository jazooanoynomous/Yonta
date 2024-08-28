import React, { useState } from 'react';

function AddPlayerTypeModal() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      <div
        className="fixed"
        style={{ top: '461px', left: '583px' }}
      >
        <div className="w-[148px] h-[334px] bg-white flex items-center justify-center flex-col rounded opacity-0">
          <div className="text-4xl">+</div>
          <p className="mt-2">Add player type</p>
          <button
            onClick={handleOpenAddModal}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {isAddModalOpen && <AddPlayerFormModal close={() => setIsAddModalOpen(false)} />}
    </>
  );
}

function AddPlayerFormModal({ close }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      <div className="fixed top-[10%] left-1/2 transform -translate-x-1/2 bg-white w-[470px] h-[390px] flex rounded-lg z-50">
        {/* Left Column */}
        <div className="w-[148px] h-[334px] flex items-center justify-center bg-gray-100">
          <span className="text-5xl">📷</span>
        </div>

        {/* Right Column */}
        <div className="w-[251px] h-[80px] ml-6 flex flex-col justify-between">
          {/* Player Name */}
          <div className="w-[142px] h-[24px] text-center">Player Name</div>
          <textarea
            className="w-[251px] h-[50px] rounded-tl-lg"
            placeholder="Enter player name"
          />
        </div>
      </div>
      <button
        className="fixed top-4 right-4 text-2xl z-50"
        onClick={close}
      >
        &times;
      </button>
    </>
  );
}

export default AddPlayerTypeModal;
