import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const ProductModal = ({ isOpen, onClose, onAddMealType }) => {
  const [type, setType] = useState("Football");
  const [whenToConsume, setWhenToConsume] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAddCategory = () => {
    if (type && image) {
      onAddMealType({ type, image, whenToConsume });
      setType("Football");
      setWhenToConsume("");
      setImage(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[470px] h-[200px] shadow-lg p-6 relative">
        <div className="flex gap-2">
          <div className="w-[148px] h-[148px] bg-gray-100 border border-dashed border-gray-300 rounded-[15px] flex items-center justify-center">
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
          <div className="flex flex-col flex-grow mt-0 w-[251px] h-[80px] gap-2">
            <label className="text-gray-700 font-semibold">Category name</label>
            <input
              type="text"
              placeholder="Player Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-[251px] h-[50px] p-2 mb-1 border rounded-lg bg-gray-100"
            />
          </div>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="absolute bottom-4 left-1/2 ml-2 transform -translate-x-1/2">
          <button
            className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
            onClick={handleAddCategory}
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
