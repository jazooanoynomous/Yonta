import React, { useState } from 'react';
import Layout from '../../Layout';
import { FaSave } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Healthy from '../../components/healthy';
import Healthy2 from '../../components/healthy2';

const suggestions = [
    'Diet & nutrition',
    'Suplements',
    'Workout & hobbys',
    'Cover trending',
    'Transcripts',
];

const HealthyRecipes = () => {
    const [activeSuggestion, setActiveSuggestion] = useState(null);
    const navigate = useNavigate();

    const handleSuggestionClick = (index) => {
        setActiveSuggestion(index);
    };
    const handleAddRecipes = () => {
        navigate('/addrecipes'); // Navigate to the '/add-user' page
      };

    const handleAddCategory = (category) => {
        console.log('Add Category:', category);
        // Handle category addition logic
    };

    const handleDeleteCategory = (id) => {
        console.log('Delete Category ID:', id);
        // Handle category deletion logic
    };

    return (
        <Layout>
            <div className="p-4">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Healthy Recipes</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-2 py-1"
                    />
                </header>

                <Healthy
                    onAddCategory={handleAddCategory}
                    onDeleteCategory={handleDeleteCategory}
                />
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick
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


                <Healthy2 onDeleteCategory={handleDeleteCategory} />
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick={handleAddRecipes}
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>

                </div>


            </div>

        
        </Layout >
    );
};

export default HealthyRecipes;
