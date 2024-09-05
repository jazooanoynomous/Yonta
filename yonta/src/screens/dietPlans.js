import React, { useState } from 'react';
import Layout from '../Layout';
import DropdownMenu from '../components/dropdownMenu';
import AddPlanModal from '../components/Modals/addPlanModel';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';


const DietPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlanTitle, setNewPlanTitle] = useState('');
  const [plans1, setPlans1] = useState([1, 2, 3, 4, 5]);
  const [plans2, setPlans2] = useState([6, 7, 8, 9, 10, 11, 12, 13]);
  const [plans3, setPlans3] = useState([14, 15, 16]);
  const navigate = useNavigate();


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete1 = (id) => {
    console.log(`Deleting plan with id: ${id}`);
    setPlans1(plans1.filter(plan => plan !== id));
  };

  const handleDelete2 = (id) => {
    console.log(`Deleting plan with id: ${id}`);
    setPlans2(plans2.filter(plan => plan !== id));
  };
  const handleDelete3 = (id) => {
    console.log(`Deleting plan with id: ${id}`);
    setPlans3(plans3.filter(plan => plan !== id));
  };

  const handleEdit1 = (id) => {
    console.log(`Editing plan with id: ${id}`);
  };

  const handleEdit2 = (id) => {
    console.log(`Editing plan with id: ${id}`);
  };
  const handleEdit3 = (id) => {
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
          <h1 className="text-2xl font-bold">Nutrition & diet</h1>
          <div className="flex space-x-4 ">
            <input
              type="text"
              placeholder="Search diet plans"
              className=" rounded-xl px-2 py-1 mr-28 w-[360px]"
              
            />
            <button
              onClick={handleAddUserClick}
              className="text-blue border px-4 py-2 rounded-xl"
            >
              Edit Questions
            </button>

            <button
              onClick={handleAddUserClick}
              className="bg-blue text-white rounded-xl flex px-4 py-2"
            >
              <FaPlus className=" w-6 h-6 font-thin" />

              Add User
            </button>
          </div>
        </header>
        <div className="py-10 flex space-x-6 mr-20">


          {/* First Dropdown Menu */}
          <DropdownMenu
            title="Special Diet Plans 1"
            plans={plans1}
            handleDelete={handleDelete1}
            handleEdit={handleEdit1}
            toggleModal={toggleModal}
          />

          {/* Second Dropdown Menu */}
          <DropdownMenu
            title="1000 Calories Diet Plans"
            plans={plans2}
            handleDelete={handleDelete2}
            handleEdit={handleEdit2}
            toggleModal={toggleModal}
          />
          <DropdownMenu
            title="1000 Calories Diet Plans"
            plans={plans2}
            handleDelete={handleDelete3}
            handleEdit={handleEdit3}
            toggleModal={toggleModal}
          />

          <AddPlanModal
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            newPlanTitle={newPlanTitle}
            setNewPlanTitle={setNewPlanTitle}
            handleSave={handleSave}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DietPlans;
