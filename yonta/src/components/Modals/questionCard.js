import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditQuestionModal from './editQuestionModel'

const QuestionCard = ({ question, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true); // Open the modal when edit is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div key={question.id} className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{`Question ${question.id}`}</h3>
        <div className="bg-[#FB5458] p-2 rounded-lg">
          <FaTrash className="text-white cursor-pointer" />
        </div>
      </div>
      <div className="bg-backgroundgray p-4 rounded-2xl mb-2">
        <p className="text-sm">{question.title}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Options</h3>
        <div
          className="flex bg-blue p-2 rounded-lg gap-1 cursor-pointer"
          onClick={handleEditClick}
        >
          <FaEdit className="text-white" />
          <p className="text-white text-xs">Edit</p>
        </div>
      </div>
      <div className="grid grid-cols-5">
        {question.options.map((option) => (
          <div key={option.id} className="flex flex-col items-center p-2">
            <img
              src={option.imageUrl}
              alt={option.label}
              className="w-[87px] h-[87px] rounded-xl p-4 mb-2 bg-backgroundgray"
            />
            <span className="text-xs">{option.label}</span>
          </div>
        ))}
      </div>

      {/* Render the modal */}
      <EditQuestionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        question={question}
        onSave={onSave} // Pass the save function
      />
    </div>
  );
};

export default QuestionCard;
