import React, { useState } from "react";
import { FaTrash, FaUpload, FaPlus, FaTimes,FaSave } from "react-icons/fa";

const EditQuestionModal = ({ isOpen, onClose, question, onSave }) => {
  const [editedQuestion, setEditedQuestion] = useState(question);

  const handleImageChange = (e, index) => {
    const newOptions = [...editedQuestion.options];
    const file = URL.createObjectURL(e.target.files[0]);
    newOptions[index] = { ...newOptions[index], imageUrl: file };
    setEditedQuestion({ ...editedQuestion, options: newOptions });
  };

  const handleLabelChange = (e, index) => {
    const newOptions = [...editedQuestion.options];
    newOptions[index] = { ...newOptions[index], label: e.target.value };
    setEditedQuestion({ ...editedQuestion, options: newOptions });
  };

  const handleDeleteOption = (index) => {
    const newOptions = editedQuestion.options.filter((_, i) => i !== index);
    setEditedQuestion({ ...editedQuestion, options: newOptions });
  };

  const handleAddOption = () => {
    const newOptions = [
      ...editedQuestion.options,
      { id: editedQuestion.options.length + 1, imageUrl: "", label: "" }
    ];
    setEditedQuestion({ ...editedQuestion, options: newOptions });
  };

  const handleSave = () => {
    onSave(editedQuestion);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md w-[600px] relative">
          {/* Close icon in the top right corner */}
          <FaTimes
            className="absolute top-2 right-2 text-gray-500 cursor-pointer"
            onClick={onClose}
          />

          {/* Options Grid */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {editedQuestion.options.map((option, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Option label */}

                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  className="hidden"
                  id={`file-upload-${index}`}
                />

                {/* Custom upload box with icon */}
                <label
                  htmlFor={`file-upload-${index}`}
                  className="cursor-pointer w-[100px] h-[100px] flex flex-col justify-center items-center rounded-xl p-4 mb-2 bg-backgroundgray"
                >
                  {option.imageUrl ? (
                    <img
                      src={option.imageUrl}
                      alt={option.label}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <FaUpload className="text-gray-500 mb-2" />
                      <span className="text-xs text-gray-500">Upload</span>
                    </div>
                  )}
                </label>
                <label className="text-sm mb-1 mt-5">Option {index + 1}</label>

                <input
                  type="text"
                  value={option.label}
                  onChange={(e) => handleLabelChange(e, index)}
                  className="p-2 border border-gray-300 rounded mb-2 w-20"
                />
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteOption(index)}
                />
              </div>
            ))}

            {/* Add More box */}
            <div
              className="flex flex-col items-center justify-center cursor-pointer w-[87px] h-[87px] rounded-xl bg-backgroundgray"
              onClick={handleAddOption}
            >
              <FaPlus className="text-gray-500 mb-2" />
              <span className="text-xs text-gray-500">Add More</span>
            </div>
          </div>

          {/* Save button */}
          <div className="absolute bottom-4 left-1/2 ml-2 transform -translate-x-1/2">
          <button
            className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
            // onClick={handleAddCategory}
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
        </div>
      </div>
    )
  );
};

export default EditQuestionModal;
