import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IMAGEURL } from '../../utils/constant';

const CategoryCard = ({ category, onEdit, onDelete }) => {
    const imageUrl = `${IMAGEURL}${category.image}`;
    
    
    
    return (
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-1 h-[196px] w-[156px]">
            <img
                src={imageUrl}
                alt={category.name}
                className="object-cover rounded-xl mb-2 h-[148px] w-[148px]"
            />
            <div className="flex space-x-2 ml-12">
                <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => onDelete(category.id)}>
                    <FaTrash className="text-white cursor-pointer" />
                </div>
                <div className="flex bg-blue p-2 rounded-lg gap-1" onClick={() => onEdit(category)}>
                    <FaEdit className="text-white cursor-pointer" />
                    <p className='text-white text-xs'>Edit</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
