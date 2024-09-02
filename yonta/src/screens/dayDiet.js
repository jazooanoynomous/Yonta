import React, { useState } from 'react';
import Layout from '../Layout';
import DropMenuDays from '../components/dropMenuDays';
import AddPlanModal from '../components/Modals/addPlanModel';
import AddNewFoodModel from '../components/Modals/addNewFoodModel';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';


const DayDiet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddNewFoodModalOpen, setIsAddNewFoodModalOpen] = useState(false); // State for new modal
    const [newPlanTitle, setNewPlanTitle] = useState('');
    const [plans1, setPlans1] = useState([1, 2, 3, 4,]);
    const [plans2, setPlans2] = useState([6, 7, 8, 9,]);
    const [plans3, setPlans3] = useState([11, 12, 13, 14,]);
    const [plans4, setPlans4] = useState([16, 17, 18, 19,]);
    const [plans5, setPlans5] = useState([21, 22, 23, 24,]);
    const [plans6, setPlans6] = useState([26, 27, 28, 29,]);
    const navigate = useNavigate();

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

    const handleAddUserClick = () => {
        navigate('/adduser'); // Navigate to the '/add-user' page
    };

    return (
        <Layout>
            <div className="p-4">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Diet Plans</h1>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded px-2 py-1"
                        />
                        <button
                            className="bg-blue text-white px-4 py-2 rounded"
                        >
                            Add User
                        </button>
                    </div>
                </header>
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