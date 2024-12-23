import React, { useState } from 'react';
import { FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import CategoryCard from '../components/Modals/categoryCard'

const initialCategories = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4341.png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Group 183382.png' },
    { id: 3, name: 'Category 3', imageUrl: '/images/Group 183383.png' },
    { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4346.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Group 183384.png' },
    { id: 6, name: 'Category 6', imageUrl: '/images/Group 183381.png' },
];

const Categories = ({ onAddCategory, onDeleteCategory, onEditCategory }) => {
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

    const handleEditCategory = (id) => {
        // handle edit logic here, you can use a modal or something similar
        onEditCategory(id);
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
                    <CategoryCard
                        key={category.id}
                        category={category}
                        onDelete={handleDeleteCategory}
                        onEdit={handleEditCategory}
                    />
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
                        <p className='font-semibold mb-2'>Category name</p>

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

export default Categories;
