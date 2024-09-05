import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';

const initialCategories = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4495.png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Rectangle 4496 (1).png' },
    { id: 3, name: 'Category 3', imageUrl: '/images/Rectangle 4497 (1).png' },
    { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4498.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Group 183265.png' },
        { id: 6, name: 'Category 5', imageUrl: '/images/Group 183259.png' },

];

const Healthy = ({ onAddCategory, onDeleteCategory }) => {
    const [categories, setCategories] = useState(initialCategories);
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', imageUrl: '' });

    const handleAddCategory = () => {
        const newCategoryWithId = { ...newCategory, id: Date.now() };
        setCategories([...categories, newCategoryWithId]);
        setShowModal(false);
        onAddCategory(newCategoryWithId);
    };

    const handleDeleteCategory = (id) => {
        const updatedCategories = categories.filter((category) => category.id !== id);
        setCategories(updatedCategories);
        onDeleteCategory(id);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewCategory({ ...newCategory, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 rounded-lg">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center rounded-xl bg-white shadow-md p-1 h-[196px] w-[156px]"
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.name}
                            className="object-cover rounded-xl mb-2 h-[148px] w-[148px]"
                        />
                        <div className="flex space-x-2 ml-12">
                            <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => handleDeleteCategory(category.id)}>
                                <FaTrash className="text-white cursor-pointer" />
                            </div>
                            <div className="flex bg-blue p-2 rounded-lg gap-1">
                                <FaEdit className="text-white cursor-pointer" />
                                <p className='text-white text-xs'>Edit</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    className="border p-4 flex flex-col items-center justify-center cursor-pointer rounded-2xl bg-white h-[188px] w-[156px]"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus className="text-3xl text-gray-500 mb-2" />
                    <p>Add Category</p>
                </div>
            </div>

            {/* Modal for adding new categories */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg  justify-center h-[370px] w-[268px] ">

                        {/* Image Picker with Icon */}
                        <div className="mb-2 ml-10 mt-2">
                            <label htmlFor="image-upload" className="cursor-pointer bg-[#F1F4FA] flex flex-col items-center justify-center w-36 h-36 border-2 border-dashed rounded-lg hover:bg-gray-100">
                                <FaUpload className="text-3xl text-gray-500 mb-2" />
                                <span className="text-gray-500">Upload image</span>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <p className='font-semibold mb-2'>Catagory name</p>

                        {/* Category Name Field */}
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={newCategory.name}
                            onChange={(e) =>
                                setNewCategory({ ...newCategory, name: e.target.value })
                            }
                            className="rounded-xl px-2 py-1 mb-4 w-full bg-[#F1F4FA] h-12"
                        />

                        {/* Buttons */}
                        <div className="flex justify-center">
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
            )}
        </div>
    );
};

export default Healthy;
