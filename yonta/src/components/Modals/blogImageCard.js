// CategoryCard.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IMAGEURL } from '../../utils/constant';
import { formatDate } from '../utils/formatDate';
import { useNavigate } from 'react-router-dom';

const BlogImageCard = ({ category, onDeleteCategory, onEditCategory }) => {
    const imageUrl = `${IMAGEURL}${category.image}`;
    const navigate = useNavigate();
    const handleEditBlog = (category) => {
        navigate('/addblog', { state: { category, isEdit: true } }); // Pass the recipe data and isEdit as true for editing
    };

    return (
        <div
            key={category.id}
            className="flex flex-col items-center rounded-2xl h-[294px] w-[200px] bg-white"
        >
            <img
                src={imageUrl}
                alt={category.title}
                className="w-[200px] h-[200px] object-cover rounded-xl"
            />
            <div className="flex flex-col items-start px-2 rounded-2xl h-[220px] w-[193px] bg-white">
                <p className="text-md font-semibold">{category.title}</p>
                <p className="text-sm ">{category.author}</p>

                <p className="text-sm">{formatDate(category.date)}</p>

            </div>
            <div className="flex space-x-2 mb-1 mr-24">
                <div className="bg-[#FB5458] p-1 rounded-lg" onClick={() => onDeleteCategory(category.id)}>
                    <FaTrash className="text-white cursor-pointer" />
                </div>
                <div className="flex bg-blue p-1 rounded-lg gap-1" onClick={() => handleEditBlog(category)}>
                    <FaEdit className="text-white cursor-pointer" />
                    <p className="text-white text-xs">Edit</p>
                </div>
            </div>
        </div>
    );
};

export default BlogImageCard;
