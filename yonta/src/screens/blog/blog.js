import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/Modals/categoryCard'
import Layout from '../../Layout'
import BlogImageCard from '../../components/Modals/blogImageCard';

const initialCategories = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4497 (2).png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Rectangle 4496 (2).png' },
    { id: 3, name: 'Category 3', imageUrl: '/images/Rectangle 4496 (2).png' },
    { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4496 (2).png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Group 183384.png' },
    { id: 6, name: 'Category 6', imageUrl: '/images/Rectangle 4496 (2).png' },
];
const suggestions = [
    'Diet & nutrition',
    'Suplements',
    'Workout & hobbys',
    'Cover trending',
    'Transcripts',
];
const blog = [
    { id: 1, name: 'Fat in Egg ', imageUrl: '/images/Rectangle 4512.png', author: 'Ajay', date: '12 Apr 2022' },
    { id: 2, name: 'Protien in egg ', imageUrl: '/images/Rectangle 4512.png', author: 'Ajay', date: '12 Apr 2022' },
];

const Blog = ({ onAddCategory, onDeleteCategory, onEditCategory }) => {
    const [categories, setCategories] = useState(initialCategories);
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', imageUrl: '' });
    const [activeSuggestion, setActiveSuggestion] = useState(null);
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);


    const handleSuggestionClick = (index) => {
        setActiveSuggestion(index);
    };

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
    const handleOpenModal = () => {
        setIsBlogModalOpen(true);
    };
    const navigate = useNavigate();

    const handleAddBlogClick = () => {
      navigate('/addblog'); // Navigate to the '/add-user' page
    };

    return (
        <Layout>
            <div className="mb-20">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Blog</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-2 py-1"
                    />
                </header>
                <h3 className="text-xl p-4">Catagory</h3>

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
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick={handleAddBlogClick}
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>


                </div>
                <hr className="flex-1 border-gray-300 ml-4 border" />

                <div className="flex gap-2 mb-6 mt-10">
                    <h2 className="text-xl mt-4 mr-4 font-semibold">Category:</h2>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(index)}
                            className={`cursor-pointer p-2 border rounded-xl mt-3 ${activeSuggestion === index ? 'bg-blue text-white' : 'bg-white'}`}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
                <div className="flex gap-6 rounded-lg">
                    {blog.map((category) => (
                        <BlogImageCard
                            key={category.id}
                            category={category}
                            onDeleteCategory={onDeleteCategory}
                            onEditCategory={() => console.log(`Editing category with id: ${category.id}`)}
                        />
                    ))}
                    <div
                        className="border p-4 flex flex-col items-center justify-center cursor-pointer rounded-2xl w-[193px] h-[291px] bg-white"
                        onClick={handleOpenModal}
                    >
                        <FaPlus className="text-3xl text-gray-500 mb-2" />
                        <p>Add Recipes</p>
                    </div>
                </div>
                <h4 className='mt-4 font-semibold'>Banners</h4>

                <div className='flex gap-3'>
                    <div className="mb-2  mt-2">
                        <label htmlFor="image-upload" className="cursor-pointer bg-white flex flex-col items-center justify-center w-[351px] h-[180px]  rounded-lg hover:bg-gray-100">
                            <FaPlus className="text-3xl text-gray-500 mb-2" />
                            <span className="text-gray-500">Add more</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div
                        className="flex flex-col items-center rounded-xl bg-white shadow-md h-[175px] w-[351px] mt-2"
                    >
                        <img
                            src="/images/hero.png"

                            className="object-cover rounded-xl mb-2 h-[180px] w-[351px]"
                        />
                        <div className="flex space-x-2 ml-60">
                            <div className="bg-[#FB5458] p-2 rounded-lg" >
                                <FaTrash className="text-white cursor-pointer" />
                            </div>
                            <div className="flex bg-blue p-2 rounded-lg gap-1">
                                <FaEdit className="text-white cursor-pointer" />
                                <p className='text-white text-xs'>Edit</p>
                            </div>
                        </div>
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
        </Layout>
    );
};

export default Blog;
