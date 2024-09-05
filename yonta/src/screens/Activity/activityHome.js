import React, { useState } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import ImageModal from "../../components/Modals/imageModal";
import MuscleModal from "../../components/Modals/addMuscle";
import WorkoutModal from "../../components/Modals/workoutModal";
import { useNavigate } from "react-router-dom";

const ActivityHome = () => {
    const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
 

  const handleAddActivityClick = () => {
    navigate("/activityadd"); // Assuming your route for AddWorkout is '/add-workout'

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
          
        </div>

        {/* Main Content */}
        <div className="flex gap-2">
         

          <div className="w-full pr-[14px] ">
            <div className="flex space-x-1 mb-4">
            
            </div>
            <div className="grid grid-cols-6 gap-3 pr-4">
              {/* Repeat for other workouts */}
              <div className="space-x-4">
                <button
                  className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                  onClick={handleAddActivityClick} 
                >
                  <FaPlus className="text-2xl" />
                  <span>Add Activity</span>
                </button>
              </div>
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
             
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
  setWorkoutName={setWorkoutName}z
/>
    </Layout>
  );
};

export default ActivityHome;

  
