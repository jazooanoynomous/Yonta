import React, { useState } from "react";
import UploadImageModal from "../../components/Modals/ImageUploadModal";
import AddPlayerTypeModal from "../../components/Modals/AddPlayerTypeModal";
import PlayerTypeCard from "../../components/Modals/PlayerTypeModal";
import Layout from "../../Layout";
const Activity = () => {
  const [playerTypes, setPlayerTypes] = useState([
    { type: "Non Goalkeeper", imageSrc: "/path/to/non-goalkeeper-image.jpg" },
    { type: "Goalkeeper", imageSrc: "/path/to/goalkeeper-image.jpg" },
  ]);

  const handleDelete = (index) => {
    const newPlayerTypes = [...playerTypes];
    newPlayerTypes.splice(index, 1);
    setPlayerTypes(newPlayerTypes);
  };

  const handleEdit = (index) => {
    alert(`Edit player type: ${playerTypes[index].type}`);
  };

  const handleAddPlayerType = (newPlayerType) => {
    setPlayerTypes([...playerTypes, newPlayerType]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="add-activity">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Add Activity</h3>
          <hr className="border border-gray-300 mt-0" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-1">

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

          <div className="flex justify-between mt-8 py-2">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
              Save
            </button>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg">
              Save & proceed to workout selection
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
