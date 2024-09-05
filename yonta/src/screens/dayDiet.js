import React, { useState } from 'react';
import Layout from '../Layout';
import DropMenuDays from '../components/dropMenuDays';
import AddPlanModal from '../components/Modals/addPlanModel';
import AddNewFoodModel from '../components/Modals/addNewFoodModel';
import { FaPlus } from 'react-icons/fa';
import { FaSave } from "react-icons/fa";



const DayDiet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddNewFoodModalOpen, setIsAddNewFoodModalOpen] = useState(false); // State for new modal
    const [newPlanTitle, setNewPlanTitle] = useState('');
    const [plans1, setPlans1] = useState([1, 2, 3, 4,]);
    const [plans2, setPlans2] = useState([6, 7, 8, 9,]);
    const [plans3, setPlans3] = useState([11, 12, 13, 14,]);
    const [plans4, setPlans4] = useState([16, 17, 18, 19,]);
    const [plans5, setPlans5] = useState([21, 22, 23, 24,]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddNewFoodModal = () => {
        setIsAddNewFoodModalOpen(!isAddNewFoodModalOpen); // Toggle new modal
    };

    const handleDelete = (plans, setPlans, id) => {
        console.log(`Deleting plan with id: ${id}`);
        setPlans(plans.filter(plan => plan !== id));
    };

    const handleEdit = (id) => {
        console.log(`Editing plan with id: ${id}`);
    };

    const handleSave = () => {
        if (newPlanTitle) {
            setPlans1([...plans1, newPlanTitle]);
            setNewPlanTitle('');
            toggleModal();
        }
    };

    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">
                        <span className="text-gray-500 font-normal">Nutrition & diet</span>
                        <span className="text-black"> &gt;Calorie Deficiet plan</span>
                    </h3>

                </div>
                <div className="py-10 grid grid-cols-3 gap-y-96">
                    <DropMenuDays
                        title="Day 1"
                        plans={plans1}
                        handleDelete={(id) => handleDelete(plans1, setPlans1, id)}
                        handleEdit={handleEdit}
                        toggleModal={toggleModal}
                    />

                    <DropMenuDays
                        title="Day 2"
                        plans={plans2}
                        handleDelete={(id) => handleDelete(plans2, setPlans2, id)}
                        handleEdit={handleEdit}
                        toggleModal={toggleModal}
                    />

                    <DropMenuDays
                        title="Day 3"
                        plans={plans3}
                        handleDelete={(id) => handleDelete(plans3, setPlans3, id)}
                        handleEdit={handleEdit}
                        toggleModal={toggleModal}
                    />

                    <DropMenuDays
                        title="Day 4"
                        plans={plans4}
                        handleDelete={(id) => handleDelete(plans4, setPlans4, id)}
                        handleEdit={handleEdit}
                        toggleModal={toggleModal}
                    />

                    <DropMenuDays
                        title="Day 5"
                        plans={plans5}
                        handleDelete={(id) => handleDelete(plans5, setPlans5, id)}
                        handleEdit={handleEdit}
                        toggleModal={toggleModal}
                    />

                    {/* Add New button */}
                    <div className="flex justify-center items-center h-[44px] w-[296px] bg-white rounded-lg">
                        <FaPlus className="text-[#010102] w-6 h-6 mr-3" />

                        <button
                            onClick={toggleAddNewFoodModal}
                            className="text-blue-600 "
                        >

                            New Food
                        </button>
                    </div>
                    <div className='justify-end ml-[900px] '>
                        <button
                            className="bg-textgreen text-white w-[100.44px] h-[45px] rounded-lg flex items-center justify-center"
                            onClick
                        >
                            <FaSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </div>

                <AddPlanModal
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    newPlanTitle={newPlanTitle}
                    setNewPlanTitle={setNewPlanTitle}
                    handleSave={handleSave}
                />

                <AddNewFoodModel
                    isModalOpen={isAddNewFoodModalOpen}
                    toggleModal={toggleAddNewFoodModal}
                />

            </div>
        </Layout>
    );
};

export default DayDiet;
