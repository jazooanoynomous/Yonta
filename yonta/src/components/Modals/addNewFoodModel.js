import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaSave } from "react-icons/fa";


const AddNewFoodModel = ({ isModalOpen, toggleModal }) => {
    const [meal, setMeal] = useState('');
    const [food, setFood] = useState('');
    const [food1, setFood1] = useState('');
    const [additionalField1, setAdditionalField1] = useState('');
    const [additionalField2, setAdditionalField2] = useState('');
    const [additionalField3, setAdditionalField3] = useState('');
    const [additionalField4, setAdditionalField4] = useState('');

    const handleSave = () => {
        console.log('Meal:', meal);
        console.log('Food:', food);
        console.log('Food 1:', food1);
        console.log('Calries:', additionalField1);
        console.log('Protien:', additionalField2);
        console.log('Fats:', additionalField3);
        console.log('Fiber:', additionalField4);
        // Add your save logic here
        toggleModal();
    };

    return (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ${isModalOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-lg w-[90%] max-w-lg relative">
                <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500">
                    <FaTimes />
                </button>
                <h2 className="text-xl font-bold mb-4">Add New Food</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Meal</label>
                        <input
                            type="text"
                            value={meal}
                            onChange={(e) => setMeal(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Food</label>
                        <input
                            type="text"
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Food 1</label>
                        <input
                            type="text"
                            value={food1}
                            onChange={(e) => setFood1(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Protien</label>
                        <input
                            type="text"
                            value={additionalField1}
                            onChange={(e) => setAdditionalField1(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Calories</label>
                        <input
                            type="text"
                            value={additionalField2}
                            onChange={(e) => setAdditionalField2(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Fats</label>
                        <input
                            type="text"
                            value={additionalField3}
                            onChange={(e) => setAdditionalField3(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Fiber</label>
                        <input
                            type="text"
                            value={additionalField4}
                            onChange={(e) => setAdditionalField4(e.target.value)}
                            className="border rounded px-3 py-1 w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={toggleModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2">
                        Cancel
                    </button>
                    <button
            className="bg-textgreen text-white w-[100.44px] h-[40px] rounded-lg flex items-center justify-center"
            onClick={handleSave}
          >
            <FaSave className="mr-2" />
            Save
          </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewFoodModel;
