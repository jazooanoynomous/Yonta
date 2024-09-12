import React, { useEffect, useState } from "react";
import UploadImageModal from "../../components/Modals/ImageUploadModal";
import AddPlayerTypeModal from "../../components/Modals/AddPlayerTypeModal";
import PlayerTypeCard from "../../components/Modals/PlayerTypeModal";
import Layout from "../../Layout";
import Dropdown from "../../components/dropdowncontainer";
import Essentials from "../../components/Modals/essentials";
import EssentialsModal from "../../components/Modals/addEssentials";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "lucide-react";
import { FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";
import { BASEURL, IMAGEURL } from "../../utils/constant";
const Activity = () => {
  const navigate = useNavigate();
  const [playerTypes, setPlayerTypes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mealTypes, setMealTypes] = useState([]);
  const [expertsData, setExpertsData] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredExperts, setFilteredExperts] = useState([]); // State to store the filtered experts
  const [selectedMustHave, setSelectedMustHave] = useState([]);
  const [activityName, setActivityName] = useState('Football'); // Default value
  const [activityImage, setActivityImage] = useState('');
  const [selectedAdvance, setSelectedAdvance] = useState([]);
  const [selectedOptimal, setSelectedOptimal] = useState([]);
  const [physioPlans, setPhysioPlans] = useState([
    {
      id: 1,
      name: "Improved Endurance",
      description:
        "Morning vs Night Workouts: Deciding the Optimal Exercise Time",
    },
    { id: 2, name: "Stamina Improvement", description: "" },
    { id: 3, name: "Improved Balance", description: "" },
    { id: 4, name: "Improve hand eye Coordination", description: "" },
  ]);
  const firstPlayerData = playerTypes[0] || {}; // Access the first item or use an empty object as fallback

  const mustHavePlans = firstPlayerData?.essentials?.mustHave || [];
  const advancePlans = firstPlayerData?.essentials?.advance || [];
  const optimalPlans = firstPlayerData?.essentials?.optimal || [];

  const timeForConsume = firstPlayerData?.timeForConsume || {
    mustHave: [],
    advance: [],
    optimal: [],
  };

  console.log("hello", mustHavePlans);
  // Example: Set selected items
const handleSelectMustHave = (id) => {
  setSelectedMustHave(prevState => 
    prevState.includes(id) 
      ? prevState.filter(item => item !== id) 
      : [...prevState, id]
  );
};

  // Function to fetch user data
  const fetchExpertsData = async () => {
    try {
      const response = await axios.get(`${BASEURL}expert`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", // Add your custom header here
        },
      });
      setExpertsData(response.data.experts || []); // Set the user data in state
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchExpertsData(); // Fetch the user data when the component mounts
  }, []);

  useEffect(() => {
    // Filter experts based on the search query
    const results = expertsData.filter((expert) =>
      expert.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredExperts(results);
  }, [searchQuery, expertsData]);
  const handleDeletePlan = (id) => {
    setPhysioPlans(physioPlans.filter((plan) => plan.id !== id));
  };

  const fetchPlayerType = async () => {
    try {
      const response = await axios.get(`${BASEURL}playersType/1`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", // Add your custom header here
        },
      });
      setPlayerTypes(response.data.players || []); // Set the user data in state
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchPlayerType(); // Fetch the user data when the component mounts
  }, []);


  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(`${BASEURL}upload`, formData, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", 

        },
      });

      const imagePath = `/uploads/${response.data.filename}`; // Assuming response contains the image filename
      setActivityImage(imagePath);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSave = async () => {
    
    setLoading(true);

    try {
      // API to save activity details
      await axios.post(`${BASEURL}activity`, {
        title: activityName,
        image: activityImage,
      }, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
        },
      });

      navigate("/add-workout"); // Proceed to the next step
    } catch (error) {
      console.error("Error saving activity:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <div div className="min-h-screen bg-gray-100 p-10">
        <div className="add-activity">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Add Activity</h3>
          <hr className="border border-gray-300 mt-0" />
        </div>
        <div className="bg-gray-100  p-1">
          <div className="grid grid-cols-3 gap-0 pt-3">
            <div className="relative">
              <h3 className="text-[16px]  text-blacktext font-bold mb-2">
                Activity Title Image
              </h3>

              <UploadImageModal onImageUpload={handleImageUpload} />
          {activityImage && (
            <img src={activityImage} alt="Activity" className="mt-2" width="100" />
          
            )}
            </div>

            <div className="col-span-2">
            <h3 className="text-[16px] text-blacktext font-bold mb-4">
              Activity Name
            </h3>
            <input
              type="text"
              placeholder="Activity Name"
              className="w-[90%] p-3 border rounded-lg"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)} // Update state on input change
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
                  imageSrc={`${IMAGEURL}${playerType.image}`}
                  type={playerType.title}
                  onDelete={() => handleDelete(index)}
                  onEdit={() => handleEdit(index)}
                  title={"Football Player"}
                />
              ))}
              <AddPlayerTypeModal onAddPlayerType={handleAddPlayerType} />
            </div>
          </div>

          <div className="flex justify-end mt-8 py-2">
            <button
              className="bg-blue text-white px-6 py-2 rounded-lg"
              onClick={handleSave}
            >
              Save & proceed to workout selection
            </button>
          </div>
        </div>
        <div className="add-activity">
          <hr className="border border-gray-300 mt-0" />

          <h3 className="text-xl font-bold p-2 text-gray-800 mb-2">Physio</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {physioPlans.map((plan) => (
              <div key={plan.id} className="relative">
                <span className="text-black font-semibold">{plan.name}</span>
                <div className="relative  bg-white rounded-[10px] w-[600px] h-[45px]">
                  <input
                    type="text"
                    placeholder="Search Blog"
                    className="w-[600px] h-[36px] p-2 pr-[38px] mt-1 text-[12px] "
                    value={plan.description}
                    onChange={(e) =>
                      setPhysioPlans(
                        physioPlans.map((p) =>
                          p.id === plan.id
                            ? { ...p, description: e.target.value }
                            : p
                        )
                      )
                    }
                  />
                  <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] flex items-center justify-center"
                    onClick={() => handleDeletePlan(plan.id)}
                  >
                    <FaTrash className="w-[7.78px] h-[10px] text-white" />
                  </button>
                            
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border border-gray-300 mt-0" />
        <div className="add-activity">
          <h3 className="text-xl font-bold p-2 text-gray-800 mb-2">Experts</h3>
          <div className="flex items-center h-[50px] w-[462px] bg-white border border-border rounded-md mb-4">
            <span className="flex items-center justify-center h-full px-2">
              <FaSearch className="h-4 w-4 text-lightgray" />
            </span>
            <input
              type="text"
              placeholder="Search Experts"
              className="flex-grow text-sm text-lightgray bg-transparent rounded-[10px] px-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-0">
            {filteredExperts.map((expert) => (
              <div
                key={expert.id}
                className="flex items-center h-[123px] w-[351px] border rounded-lg p-4"
              >
                <img
                  src={`${IMAGEURL}${expert.image}` || "/images/2.png"} // Use imageSrc from expertsData or default image
                  alt={expert.name}
                  className="w-[96px] h-[96px] rounded-[7px] mr-4"
                />
                <div>
                  <h4 className="font-bold text-[14px]">{expert.name}</h4>
                  <p className="text-sm text-lightgray text-[10px]">
                    {expert.title}
                  </p>
                  <button className="text-lightgray text-[8px]">
                    View Profile
                  </button>
                </div>
                <button className="ml-auto bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] flex items-center justify-center">
                  <FaTrash className="w-[7.78px] h-[12px] text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="add-activity">
          <h3 className="text-xl font-bold p-2 text-gray-800 mb-2">
            Wellness Essentials
          </h3>
          <hr className="border border-gray-300 mt-0" />
          <div className="py-10 flex space-x-10">
            <Dropdown
              title="Must have"
              plans={mustHavePlans}
              // handleDelete={handleDelete1}
              handleEdit={handleEdit1}
              toggleModal={toggleModal}
              ItemComponent={Essentials}
            />
            <Dropdown
              title="Advance"
              plans={advancePlans}
              // handleDelete={handleDelete2}
              handleEdit={handleEdit2}
              toggleModal={toggleModal}
              ItemComponent={Essentials}
            />
            <Dropdown
              title="Optimal"
              plans={optimalPlans}
              // handleDelete={handleDelete3}
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
