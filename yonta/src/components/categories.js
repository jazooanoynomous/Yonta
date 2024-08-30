import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const initialCategories = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4341.png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Group 183382.png' },
    // { id: 3, name: 'Category 3', imageUrl: '/images/Group 183383.png' },
    // { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4346.png' },
    // { id: 5, name: 'Category 5', imageUrl: '/images/Group 183384.png' },
    // { id: 6, name: 'Category 6', imageUrl: '/images/Group 183381.png' },
];

const Categories = ({ onAddCategory, onDeleteCategory }) => {
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

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 rounded-lg">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center rounded-xl bg-white shadow-md p-1 h-[196px] w-[156px] "
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
                    <div className="bg-white p-6 rounded shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Add New Category</h2>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={newCategory.name}
                            onChange={(e) =>
                                setNewCategory({ ...newCategory, name: e.target.value })
                            }
                            className="border rounded px-2 py-1 mb-4 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newCategory.imageUrl}
                            onChange={(e) =>
                                setNewCategory({
                                    ...newCategory,
                                    imageUrl: e.target.value,
                                })
                            }
                            className="border rounded px-2 py-1 mb-4 w-full"
                        />
                        <button
                            onClick={handleAddCategory}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
