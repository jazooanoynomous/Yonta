import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ImageModal = ({ imageSrc, type, onDelete, onEdit, title, id }) => {
  return (
    <div className="bg-white rounded-lg w-[156px] h-[199px] shadow-lg px-2 py-3">
      <div className="relative h-[148px] w-[148px] pr-2">
        <img
          src={imageSrc}
          alt={type}
          className="h-full w-full object-cover rounded-[2px]"
        />
        {title && (
          <div
            className="absolute bottom-0 left-0 bg-opacity-100 text-white opacity-70 w-full p-[2px_4px] text-[10px] font-normal leading-[14px] rounded-b-[2px]"
            style={{ lineHeight: '14px' }}
          >
            {title}
          </div>
        )}
      </div>
      <div className="flex justify-end mt-2 gap-[4px]">
        <button
          className="flex items-center justify-center bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] p-[7px_10px]"
          onClick={() => onDelete(id)}
        >
          <FaTrash className="w-[7.78px] h-[10px] text-white" />
        </button>
        <button
          className="flex items-center justify-center bg-[#1782AF] rounded-[6px] w-[56.01px] h-[24px] p-[7px_10px]"
          onClick={onEdit}
        >
          <FaEdit className="w-[10.01px] h-[10px] text-white mr-2" />
          <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">
            Edit
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
