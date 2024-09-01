import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const MuscleModal = ({ isOpen, onClose, onAddMealType }) => {
  const [type, setType] = useState("Football");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAddMealType = () => {
    if (type && image) {
      onAddMealType({ type, image });
      setType("Football");
      setImage(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[268px] h-[374px] shadow-lg p-6 relative">
        <div className="flex flex-col">
          {/* Image Upload Section */}
          <div className="w-[148px] h-[148px] bg-gray-100 border border-dashed border-gray-300 rounded-[10px] flex items-center justify-center mb-4 mx-auto">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="object-cover h-full w-full rounded-md"
              />
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center">
                <span className="text-gray-400 mb-2">Upload Image</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          {/* Muscle Type Section */}
          <label className="text-gray-700 font-semibold mb-2 text-left">
            Muscle Group Name
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
            onClick={handleAddMealType}
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuscleModal;
