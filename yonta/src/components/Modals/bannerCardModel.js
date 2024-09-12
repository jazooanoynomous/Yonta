import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { IMAGEURL } from '../../utils/constant';

const BannerCardModel = ({ imageSrc, type, onDelete, onEdit, title }) => {
  return (
    <div className=" px-2 py-3">
      <div className="relative ">
        <img
          src={`${IMAGEURL}${imageSrc}`}
          alt={type}
          className="h-[180px] w-[345px] object-cover rounded-2xl"
        />
        {title && (
          <div
            className="absolute bottom-0 left-0  bg-opacity-100 text-white opacity-70 w-full p-[2px_4px] text-[14px] font-normal leading-[14px] rounded-b-[2px]"
            style={{ lineHeight: '14px' }}
          >
            {title}
          </div>
        )}
      </div>
      <div className="flex justify-end my-2 gap-[4px]">
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
          <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">
            Edit
          </span>
        </button>
      </div>
    </div>
  );
};

export default BannerCardModel;
