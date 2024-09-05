import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import TopPicModel from '../components/Modals/topPicModel'

const topPic = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4556.png', author: 'Ajay', duration: '10:00' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Rectangle 4557.png', author: 'Ajay', duration: '15:30' },
];

const TopPicks = ({ onDeleteCategory }) => {
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', author: '', duration: '', imageUrl: '' });
    const [PodCastsName, setPodCastName] = useState("");
    const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

    const handleAddCategory = () => {
        console.log('Category added:', newCategory);
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setIsWorkoutModalOpen(true);
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
            <h1 className="font-semibold text-xl mb-5">Top Picks:</h1>
            <div className="flex gap-6 rounded-lg">
                {topPic.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center rounded-2xl h-[220px] w-[193px] bg-white"
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.name}
                            className="mb-1 mt-1 w-[185px] h-[98px] object-cover rounded-xl"
                        />
                        <div className="flex flex-col items-start px-2 rounded-2xl h-[220px] w-[193px] bg-white">
                            <p className="text-md font-semibold">{category.name}</p>
                            <p className="text-sm text-gray-500">Author: {category.author}</p>
                            <p className="text-sm text-gray-500">Duration: {category.duration}</p>
                        </div>
                        <div className="flex space-x-2 mb-1 mr-20">
                            <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => onDeleteCategory(category.id)}>
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
                    className="border p-4 flex flex-col items-center justify-center cursor-pointer rounded-2xl w-[185px] h-[98px] bg-white"
                    onClick={handleOpenModal}
                >
                    <FaPlus className="text-3xl text-gray-500 mb-2" />
                    <p>Add Categories</p>
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

export default TopPicks;
