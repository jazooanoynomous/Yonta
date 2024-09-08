import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import TopPicModel from '../components/Modals/topPicModel'
import { useNavigate } from 'react-router-dom';

const Recipe = ({ onDeleteCategory,data }) => {
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', author: '', duration: '', imageUrl: '' });
    const [PodCastsName, setPodCastName] = useState("");
    const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
    console.log('data',data);
    const navigate = useNavigate();

    const handleAddCategory = () => {
        console.log('Category added:', newCategory);
        setShowModal(false);
    };
    const handleDeleteCategory = async (id) => {
        // Call the prop function to handle deletion
        await onDeleteCategory(id);
    };
    const handleAddRecipes = () => {
        navigate('/addrecipes', { state: { isEdit: false } }); // Pass isEdit as false for adding a new recipe
    };

    // Handle editing a recipe
    const handleEditRecipe = (recipe) => {
        navigate('/addrecipes', { state: { recipe, isEdit: true } }); // Pass the recipe data and isEdit as true for editing
    };

    const handleCloseModal = () => {
        setIsWorkoutModalOpen(false);
    };

    const handleSaveWorkout = () => {
        // Save workout logic
        handleAddCategory();
        handleCloseModal();
    };

    return (
        <div className="mt-10">
            <div className="flex gap-6 rounded-lg">
                {data.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center rounded-2xl h-[290px] w-[200px] bg-white"
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.name}
                            className=" w-[200px] h-[200px] object-cover rounded-xl"
                        />
                        <div className="flex flex-col items-start px-2 rounded-2xl h-[220px] w-[193px] bg-white">
                            <p className="text-md font-semibold">{category.name}</p>
                        </div>
                        <div className="flex space-x-2 mb-1 mr-20">
                            <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => onDeleteCategory(category.id)}>
                                <FaTrash className="text-white cursor-pointer" />
                            </div>
                            <div className="flex bg-blue p-2 rounded-lg gap-1" onClick={() => handleEditRecipe(category)}>
                                <FaEdit className="text-white cursor-pointer" />
                                <p className="text-white text-xs">Edit</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    className="border p-4 flex flex-col items-center justify-center cursor-pointer rounded-2xl w-[193px] h-[291px] bg-white"
                    onClick={handleAddRecipes}
                >
                    <FaPlus className="text-3xl text-gray-500 mb-2" />
                    <p>Add Recipes</p>
                </div>
            </div>

            {/* Modal for adding new categories */}
            <TopPicModel
                isOpen={isWorkoutModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveWorkout}
                workoutName={PodCastsName}
                setPodCastName={setPodCastName}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
            />
        </div>
    );
};

export default Recipe;
