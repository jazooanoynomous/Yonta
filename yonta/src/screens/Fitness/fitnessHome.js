import React, { useState } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import ImageModal from "../../components/Modals/imageModal";
import MuscleModal from "../../components/Modals/addMuscle";
import WorkoutModal from "../../components/Modals/workoutModal";
import { useNavigate } from "react-router-dom";
import LargeImageModal from "../../components/Modals/largeimage";
import FitnessModal from "../../components/Modals/fitnessModal";

const FitnessHome = () => {
    const [muscleGroup, setMuscleGroup] = useState("Muscle Group");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
 

  const handleAddFitnessClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveWorkout = () => {
    console.log("Workout Saved:", workoutName);
    setIsWorkoutModalOpen(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 ">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">
            <span className="text-gray-500"> Activity</span>
          </h3>
          
        </div>

        {/* Main Content */}
        <div className="flex ">
         

          <div className="w-full pr-[24px] ">
           
            <div className="grid grid-cols-3 gap-3 ">
              
              <LargeImageModal title="Thigh" imageSrc="images/diet.png" />
              <LargeImageModal title="Thigh" imageSrc="images/diet.png" />
              <LargeImageModal title="Thigh" imageSrc="images/diet.png"  />
              <LargeImageModal title="Thigh" imageSrc="images/diet.png"  />
              <LargeImageModal title="Thigh" imageSrc="images/diet.png" />              
              <div className="space-x-4">
                <button
                  className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                  onClick={handleAddFitnessClick} 
                >
                  <FaPlus className="text-2xl" />
                  <span>Add FitnessType</span>
                </button>
              </div>
             
            </div>
          </div>

        </div>
        <hr className="border border-gray-300 mt-0" />
        <div className="w-1/3 gap-2 p-4 rounded-lg">
            <div className="flex space-x-1 mb-4 b">
              <h5 className="text-lg font-semibold mb-4">Muscle group </h5>
              <div className="flex gap-[16px] mb-4 ">
                
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] bg-white ${
                    muscleGroup === "Muscle Group"
                    ? "bg-blue text-white"
                    : "bg-white text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Muscle Group")}
                >
                  Muscle Group
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px]  ${
                    muscleGroup === "Workout Focus"
                      ? "bg-blue text-white"
                      : "bg-white text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Workout Focus")}
                >
                  Workout Focus
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px]  ${
                    muscleGroup === "Home Workout"
                      ? "bg-blue text-white"
                      : "bg-white text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Home Workout")}
                >
                  Home Workout
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] ${
                    muscleGroup === "Equipment"
                      ? "bg-blue text-white"
                      : "bg-white text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Equipment")}
                >
                  Equipment
                </button>
                <button
                  className={`px-2 pb-1 text-[12px] h-[34px] w-[57px] ${
                    muscleGroup === "Workout Focus"
                      ? "bg-blue text-white"
                      : "bg-white text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Workout Focus")}
                >
                  Workout Focus
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pr-4">
              {/* Repeat for other workouts */}
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <div className="space-x-4">
                <button
                  className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                >
                  <FaPlus className="text-2xl" />
                  <span>Add Workout</span>
                </button>
              </div>
            </div>
          </div>

      </div>
      <FitnessModal
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

export default FitnessHome;

  
