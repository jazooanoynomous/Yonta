import React, { useState } from 'react';
import { FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import ProductCard from '../components/productCard';
import Layout from '../Layout'
import ProductCard2 from '../components/productCard2'
import ProductModal from '../components/Modals/productModel';
import { initialCategories, Product } from '../components/Datas';

// export const initialCategories = [
//     { id: 1, name: 'Why Protien', imageUrl: '/images/P icon.png' },
//     { id: 2, name: 'Gainners', imageUrl: '/images/P icon.png' },
//     { id: 3, name: 'Pre Workout', imageUrl: '/images/P icon.png' },

// ];
// export const Product = [
//     { id: 1, name: 'Why Protien', imageUrl: '/images/Group 183382 (1).png' },
//     { id: 2, name: 'Gainners', imageUrl: '/images/Group 183382 (1).png' },
//     { id: 3, name: 'Pre Workout', imageUrl: '/images/Group 183382 (1).png' },

// ];
const suggestions = [
    'Improve sound',
    'Add more episodes',
    'Invite guest',
    'Cover trending',
    'Transcripts',
];
const Products = ({ onAddCategory, onDeleteCategory, onEditCategory }) => {
    const [categories, setCategories] = useState(initialCategories);
    const [product, setProduct] = useState(Product);

    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', imageUrl: '' });
    const [activeSuggestion, setActiveSuggestion] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPlanTitle, setNewPlanTitle] = useState('');


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddCategory = (newCategoryData) => {
        setCategories([...categories, { ...newCategoryData, id: Date.now() }]);
        toggleModal();
    };
    const handleSave = () => {
        if (newPlanTitle) {
            toggleModal();
        }
    };
    const handleSuggestionClick = (index) => {
        setActiveSuggestion(index);
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
        <Layout>
            <div className="mb-20">
                <div className="flex gap-10 rounded-lg">
                    {categories.map((category) => (
                        <ProductCard
                            key={category.id}
                            category={category}
                            onDelete={handleDeleteCategory}
                            onEdit={handleEditCategory}
                        />
                    ))}

                    <div
                        className=" p-4 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl bg-white h-[105px] w-[93px] "
                        onClick={() => toggleModal(true)}
                    >
                        <FaPlus className="text-3xl text-gray-500 mb-2" />
                        <p>Add Category</p>
                    </div>
                </div>
                <hr className="flex-1 border-gray-300 ml-4 border mt-20" />

                <div className="flex gap-2 mb-6 mt-10">
                    <h2 className="text-xl mt-4 mr-4 font-semibold">Category:</h2>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(index)}
                            className={`cursor-pointer p-2 border rounded-xl mt-3 text-sm ${activeSuggestion === index ? 'bg-blue text-white' : 'bg-gray-100'}`}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
                <div className="flex gap-10 rounded-lg">
                    {product.map((category) => (
                        <ProductCard2
                            key={category.id}
                            category={category}
                            onDelete={handleDeleteCategory}
                            onEdit={handleEditCategory}
                        />
                    ))}

                    <div
                        className=" p-4 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl bg-white h-[218px] w-[156px] "
                        onClick={() => toggleModal(true)}
                    >
                        <FaPlus className="text-3xl text-gray-500 mb-2" />
                        <p>Add Sub Category</p>
                    </div>
                </div>

                <ProductModal
                  isOpen={isModalOpen}
                  onClose={toggleModal}
                  onAddMealType={handleAddCategory}
                />
            </div>
        </Layout>
    );
};

export default Products;
