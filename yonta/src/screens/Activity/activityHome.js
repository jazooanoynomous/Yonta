import React, { useState, useEffect } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import ImageModal from "../../components/Modals/imageModal";
import MuscleModal from "../../components/Modals/addMuscle";
import WorkoutModal from "../../components/Modals/workoutModal";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Make sure to import axios
import { BASEURL, IMAGEURL } from "../../utils/constant";

const ActivityHome = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [activitesData, setActivitesData] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Function to fetch user data
  const fetchActivityData = async () => {
    try {
      const response = await axios.get(`${BASEURL}activity`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', 
        }
      });
      setActivitesData(response.data.activities || []); 
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchActivityData(); 
  }, []);

  const handleDeleteActivity = async (id) => {
    try {
      await axios.delete(`${BASEURL}activity/${id}`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
        }
      });
      setActivitesData(prevData => prevData.filter(activity => activity.id !== id));
    } catch (error) {
      console.error('Error deleting Activity Data:', error);
    }
  };

  const handleEditActivity = (activity) => {
    navigate("/activityedit", { state: { activity } }); 
  };

  const handleAddActivityClick = () => {
    navigate("/activityadd"); 
  };

  const handleSaveWorkout = () => {
    console.log("Workout Saved:", workoutName);
    setIsWorkoutModalOpen(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">
            <span className="text-gray-500"> Activity</span>
          </h3>
          <button
            className="flex items-center bg-buttonblue text-white px-4 py-2 rounded-lg"
            onClick={handleAddActivityClick}
          >
            <FaPlus className="mr-2" />
            Add Activity
          </button>
        </div>

        {/* Main Content */}
        <div className="flex gap-2">
          <div className="w-full pr-[14px]">
            <div className="grid grid-cols-6 gap-3 pr-4">
              {/* Mapping over activitiesData */}
              {activitesData.map((activity) => (
                <ImageModal
                  key={activity.id}
                  id={activity.id}
                  title={activity.title}
                  imageSrc={`${IMAGEURL}${activity.image}`}
                  onDelete={handleDeleteActivity}
                  onEdit={handleEditActivity}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MuscleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMealType={(data) => console.log(data)}
      />
      <WorkoutModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        onSave={handleSaveWorkout}
        workoutName={workoutName}
        setWorkoutName={setWorkoutName}
      />
    </Layout>
  );
};

export default ActivityHome;