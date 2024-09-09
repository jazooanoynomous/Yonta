import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import CategoryCard from '../components/Modals/categoryCard';

const Category = ({ data, onAddCategory, onEditCategory, onDeleteCategory }) => {
    const [categories, setCategories] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newCategory, setNewCategory] = useState({ id: null, name: '', imageUrl: '' });

    useEffect(() => {
        setCategories(data);
    }, [data]);

    // Handle adding or editing a category
    const handleSaveCategory = () => {
        if (editMode) {
            // Edit existing category (PUT request)
            onEditCategory(newCategory);
        } else {
            // Add new category (POST request)
            onAddCategory(newCategory);
        }
        setShowModal(false);
        setNewCategory({ id: null, name: '', imageUrl: '' });
        setEditMode(false);
    };

    const handleEditCategory = (category) => {
        setNewCategory(category); // Pre-fill form with category data
        setEditMode(true);
        setShowModal(true);
    };

    const handleDeleteCategory = async (id) => {
        await onDeleteCategory(id);
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
                        onDelete={() => handleDeleteCategory(category.id)}
                        onEdit={() => handleEditCategory(category)}
                    />
                ))}

                <div
                    className="border p-4 flex flex-col items-center justify-center cursor-pointer rounded-2xl bg-white h-[188px] w-[156px]"
                    onClick={() => {
                        setShowModal(true);
                        setEditMode(false);
                        setNewCategory({ id: null, name: '', imageUrl: '' });
                    }}
                >
                    <FaPlus className="text-3xl text-gray-500 mb-2" />
                    <p>Add Category</p>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg justify-center h-[370px] w-[268px]">
                        <div className="mb-2 ml-10 mt-2">
                            <label
                                htmlFor="image-upload"
                                className="cursor-pointer bg-[#F1F4FA] flex flex-col items-center justify-center w-36 h-36 border-2 border-dashed rounded-lg hover:bg-gray-100"
                            >
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
                        <p className="font-semibold mb-2">Category name</p>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={newCategory.name}
                            onChange={(e) =>
                                setNewCategory({ ...newCategory, name: e.target.value })
                            }
                            className="rounded-xl px-2 py-1 mb-4 w-full bg-[#F1F4FA] h-12"
                        />
                        <div className="flex justify-center">
                            <button
                                className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
                                onClick={handleSaveCategory}
                            >
                                <FaSave className="mr-2" />
                                {editMode ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
