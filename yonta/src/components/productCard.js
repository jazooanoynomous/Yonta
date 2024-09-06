import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductCard = ({ category, onDelete, onEdit }) => {
    return (
        <div className="flex flex-col h-[105px] w-[93px]">
            <div className='h-[76px] w-[76px] justify-center items-center self-center bg-white p-4 rounded-xl'>
            <img
                src={category.imageUrl}
                alt={category.name}
                className="object-cover rounded-xl mb-2 h-[40px] w-[40px]"
            />
            </div>
            <div className='text-sm justify-center text-center py-2'>
                {category.name}
            </div>
            <div className="flex space-x-2">
                <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => onDelete(category.id)}>
                    <FaTrash className="text-white cursor-pointer" />
                </div>
                <div className="flex bg-blue p-2 rounded-lg gap-1" onClick={() => onEdit(category.id)}>
                    <FaEdit className="text-white cursor-pointer" />
                    <p className='text-white text-xs'>Edit</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
