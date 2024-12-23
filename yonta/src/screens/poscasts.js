import React, { useState } from 'react';
import Layout from '../Layout';
import { FaSave } from "react-icons/fa";

import Categories from '../components/categories'
import TopPicks from '../components/topPic'
import Curated from '../components/curated';

const suggestions = [
    'Improve sound',
    'Add more episodes',
    'Invite guest',
    'Cover trending',
    'Transcripts',
];

const PodCasts = () => {
    const [activeSuggestion, setActiveSuggestion] = useState(null);

    const handleSuggestionClick = (index) => {
        setActiveSuggestion(index);
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
                    <h1 className="text-2xl font-bold">Mindfullness</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-2 py-1"
                    />
                </header>

                <Categories
                    onAddCategory={handleAddCategory}
                    onDeleteCategory={handleDeleteCategory}
                />

                <div className="flex gap-2 mb-6 mt-10">
                    <h2 className="text-xl mt-4 mr-4 font-semibold">Category:</h2>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(index)}
                            className={`cursor-pointer p-2 border rounded-xl mt-3 ${activeSuggestion === index ? 'bg-blue text-white' : 'bg-gray-100'}`}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
                <div className="mb-6 flex gap-5">
                    <p className="text-xl mb-4 font-semibold ">Media Type:</p>
                    <div className="flex items-center mb-3">
                        <input type="checkbox" id="audio" name="audio" className="mr-2" />
                        <label htmlFor="audio" className="text-md">Audio</label>
                    </div>
                    <div className="flex items-center mb-3">
                        <input type="checkbox" id="video" name="video" className="mr-2" />
                        <label htmlFor="video" className="text-md">Video</label>
                    </div>
                </div>

                <TopPicks onDeleteCategory={handleDeleteCategory} />
                <Curated onDeleteCategory={handleDeleteCategory} />
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>


                </div>

            </div>
        </Layout>
    );
};

export default PodCasts;
