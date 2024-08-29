import React, { useState } from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';

const AddPlayerTypeModal = ({ onAddPlayerType }) => {
  const [type, setType] = useState('Football');
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAddPlayerType = () => {
    if (type && image) {
      onAddPlayerType({ type, image });
      setType('Football');
      setImage(null);
      setIsModalOpen(false);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg w-[148px] h-[334px] shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={handleModalOpen}
      >
        <FaPlus className="text-green-500 text-2xl mb-2" />
        <span className="text-gray-700 font-semibold">Add player type</span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[400px] shadow-lg p-6 relative">
            <div className="flex gap-2 ">
              <div className="w-[148px] h-[334px] bg-gray-100 border border-dashed border-gray-300 rounded-[30px] flex items-center justify-center">
                {image ? (
                  <img src={image} alt="Uploaded" className="object-cover h-full w-full rounded-md" />
                ) : (
                  <label className="cursor-pointer flex flex-col items-center justify-center">
                    <span className="text-gray-400 mb-2">Upload Image</span>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
              <div className="flex flex-col flex-grow">
                <label className="mb-2 text-gray-700 font-semibold">Player type name</label>
                <input
                  type="text"
                  placeholder="Player Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 mb-4 border rounded-lg bg-gray-100"
                />
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleModalClose}
            >
              &times;
            </button>
            <div className="absolute bottom-4 bg-green rounded-md right-4">
              <button
                className="bg-green-500 text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
                onClick={handleAddPlayerType}
              >
                <FaSave className="mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPlayerTypeModal;
