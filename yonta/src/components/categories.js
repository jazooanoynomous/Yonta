import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { FaSave } from "react-icons/fa";


const Categories = ({onClose}) => {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', imageUrl: '' });

    const baseUrl = "your-base-url-here"; // Replace with your actual base URL

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${baseUrl}/ecomCategory`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };

        fetchCategories();
    }, []);

    // Add a new category
    const handleAddCategory = async () => {
        
        const newCategoryData = { image: newCategory.imageUrl, title: newCategory.name };
        

        try {
            const response = await fetch(`${baseUrl}/ecomCategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCategoryData),
            });

            if (response.ok) {
                const addedCategory = await response.json();
                setCategories([...categories, addedCategory]);
                setShowModal(false);
                setNewCategory({ name: '', imageUrl: '' });
            } else {
                console.error("Failed to add category");
            }
        } catch (error) {
            console.error("Error adding category", error);
        }
    };

    // Delete a category
    const handleDeleteCategory = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/ecomCategory/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCategories(categories.filter((category) => category.id !== id));
            } else {
                console.error("Failed to delete category");
            }
        } catch (error) {
            console.error("Error deleting category", error);
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
                            src={category.image}
                            alt={category.title}
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
                        <div className='flex'>
                    
                        <button
                            className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
                            onClick={handleAddCategory}
                        >
                            <FaSave className="mr-2" />
                            Save
                        </button>

                        <button
                            onClick={() => setShowModal(false)}
                            className="ml-10 mb-10 bg-gray-300 w-[125.44px] h-[50px] text-black px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
