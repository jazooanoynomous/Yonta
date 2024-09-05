import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';


const TopPicModel = ({ isOpen, onClose, onSave, workoutName, setPodCastName, newCategory, setNewCategory }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-3 rounded-xl shadow-lg w-80 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes className="text-xl" />
                </button>
                <div className="w-[269px] h-[150px] bg-black rounded-[15px]">
                   
                </div>
                <div className="p-3">
                    <p className="m-0 font-poppins text-[14px] font-medium">Mov.2659.mp4</p>
                    <p className="m-0 font-poppins text-[14px] font-normal">01:50</p>
                    </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">PodCasts Name</label>
                    <input
                        type="text"
                        placeholder="Gold diger"
                        value={workoutName}
                        onChange={(e) => {
                            setPodCastName(e.target.value);
                            setNewCategory({ ...newCategory, name: e.target.value });
                        }}
                        className="bg-[#F1F4FA] rounded px-2 py-2  w-full"
                    />
                </div>

                <div className="flex">
                    <div className="mr-2 w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                        <input
                            type="text"
                            placeholder="Janson"
                            value={newCategory.author}
                            onChange={(e) => setNewCategory({ ...newCategory, author: e.target.value })}
                            className="bg-[#F1F4FA] rounded px-2 py-2 w-full"
                        />
                    </div>
                    <div className="w-full mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                        <input
                            type="text"
                            placeholder="18 Mint"
                            value={newCategory.duration}
                            onChange={(e) => setNewCategory({ ...newCategory, duration: e.target.value })}
                            className="bg-[#F1F4FA] rounded px-2 py-2 w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-2">
                    <button
                        className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
                        onClick={onSave}
                    >
                                                        <FaSave className="mr-2" />

                        Save
                    </button>

                   
                </div>
            </div>
        </div>
    );
};

export default TopPicModel;
