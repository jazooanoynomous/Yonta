import React, { useState } from "react";
import UploadImageModal from "../../components/Modals/ImageUploadModal";
import AddPlayerTypeModal from "../../components/Modals/AddPlayerTypeModal";
import PlayerTypeCard from "../../components/Modals/PlayerTypeModal";
import Layout from "../../Layout";
import Dropdown from "../../components/dropdowncontainer";
import Essentials from "../../components/Modals/essentials";
import EssentialsModal from "../../components/Modals/addEssentials";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const navigate = useNavigate();
  const [playerTypes, setPlayerTypes] = useState([
    { type: "Non Goalkeeper", imageSrc: "/path/to/non-goalkeeper-image.jpg" },
    { type: "Goalkeeper", imageSrc: "/path/to/goalkeeper-image.jpg" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plans1, setPlans1] = useState([1, 2, 3, 4, 5]);
  const [plans2, setPlans2] = useState([6, 7, 8, 9, 10, 11, 12, 13]);
  const [plans3, setPlans3] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const handleDelete = (index) => {
    const newPlayerTypes = [...playerTypes];
    newPlayerTypes.splice(index, 1);
    setPlayerTypes(newPlayerTypes);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSaveAndProceed = () => {
    // Add any save logic here, if needed
    navigate("/add-workout"); // Assuming your route for AddWorkout is '/add-workout'
  };

  const handleEdit = (index) => {
    alert(`Edit player type: ${playerTypes[index].type}`);
  };

  const handleAddPlayerType = (newPlayerType) => {
    setPlayerTypes([...playerTypes, newPlayerType]);
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

  const handleAddMealType = (newMealType) => {
    setMealTypes([...mealTypes, newMealType]);
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="add-activity">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Add Activity</h3>
          <hr className="border border-gray-300 mt-0" />
        </div>
        <div className="bg-gray-100  p-1">

          <div className="grid grid-cols-3 gap-0 pt-3">
            
            <div className="relative">
            <h3 className="text-xl font-bold mb-4">Activity Title Image</h3>

              <UploadImageModal />
            </div>
    
            <div className="col-span-2 ">
            <h3 className="text-xl font-bold mb-4">Activity Name</h3>
              <input
                type="text"
                placeholder="Activity Name"
                className="w-[90%] p-3 border rounded-lg"
                value="Football"
              />
            </div>
          </div>

          <div className="mt-8">
          <hr className="border border-gray-300 mt-0" />

            <h3 className="text-lg font-semibold mb-4 p-2">Player Types</h3>

            <div className="grid grid-cols-6 px-2 gap-0">
              {playerTypes.map((playerType, index) => (
                <PlayerTypeCard
                  key={index}
                  imageSrc={'images/Rectangle 4557.png'}
                  type={playerType.type}
                  onDelete={() => handleDelete(index)}
                  onEdit={() => handleEdit(index)}
                  title={'Football Player'}
                />
              ))}
              <AddPlayerTypeModal onAddPlayerType={handleAddPlayerType} />
            </div>
          </div>

          <div className="flex justify-end mt-8 py-2">
           
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg"
              onClick={handleSaveAndProceed}>
              Save & proceed to workout selection
            </button>
          </div>
        </div>
        <div className="add-activity">
          <h3 className="text-xl font-bold p-2 text-gray-800 mb-2">Wellness Essentials</h3>
          <hr className="border border-gray-300 mt-0" />
          <div className="py-10 flex space-x-10">
          <Dropdown
            title="Must have"
            plans={plans1}
            handleDelete={handleDelete1}
            handleEdit={handleEdit1}
            toggleModal={toggleModal}
            ItemComponent={Essentials}
          />
          <Dropdown
            title="Advance"
            plans={plans2}
            handleDelete={handleDelete2}
            handleEdit={handleEdit2}
            toggleModal={toggleModal}
            ItemComponent={Essentials}
          />
          <Dropdown
            title="Optimal"
            plans={plans3}
            handleDelete={handleDelete3}
            handleEdit={handleEdit3}
            toggleModal={toggleModal}
            ItemComponent={Essentials}
          />

          </div>
        </div>
        <EssentialsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onAddMealType={handleAddMealType}
      />
      </div>
    </Layout>
  );
};

export default Activity;
