import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const PlayerTypeCard = ({ imageSrc, type, onDelete, onEdit,title}) => {
  return (
    <div className="bg-white rounded-lg w-[148px] h-[334px] shadow-lg p-4">
           {title && (
        <div
          className="text-black opacity-70 w-[114px] h-[21px] mb-2"
          style={{ lineHeight: '21px' }}
        >
          {title}
        </div>
      )}
      <img src={imageSrc} alt={type} className="h-[250px] w-[124px] object-cover rounded-[8px]" />
      <div className="flex justify-end mt-2 gap-[4px]">
        <button
          className="flex items-center justify-center bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] p-[7px_10px]"
          onClick={onDelete}
        >
          <FaTrash className="w-[7.78px] h-[10px] text-white" />
        </button>
        <button
          className="flex items-center justify-center bg-[#1782AF] rounded-[6px] w-[56.01px] h-[24px] p-[7px_10px]"
          onClick={onEdit}
        >
          <FaEdit className="w-[10.01px] h-[10px] text-white mr-2" />
          <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">Edit</span>
        </button>
      </div>
    </div>
  );
};

export default PlayerTypeCard;
