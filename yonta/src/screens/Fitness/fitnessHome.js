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
  const [isMuscleModalOpen, setIsMuscleModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
 

  const handleAddFitnessClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveWorkout = () => {
    console.log("Workout Saved:", workoutName);
    setIsWorkoutModalOpen(false);
  };
  const handleAddWorkoutClick = () => {
    console.log('hello');
    
    setIsWorkoutModalOpen(true);
  };
  const handleAddMuscleClick = () => {
    setIsMuscleModalOpen(true);
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
                  className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[305px]"
                  onClick={handleAddFitnessClick} 
                >
                  <FaPlus className="text-2xl" />
                  <span>Add FitnessType</span>
                </button>
              </div>
             
            </div>
          </div>

        </div>
        <hr className="border border-gray-300 mt-4" />
        <div className="flex justify-center items-start">
  <div className="w-2/4 gap-2 p-4 rounded-lg">
    <div className="flex space-x-1 mb-4">
      <div className="w-[140px] pr-10">
        <h5 className="text-[16px] text-blacktext font-semibold mb-4">Fitness Types:</h5>
      </div>
      <div className="w-2/3 mb-4 grid grid-cols-3 gap-[10px]">
        {/* Fitness Type Buttons */}
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[100px] ${
            muscleGroup === "Muscle Group" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Muscle Group")}
        >
          Muscle Group
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[100px] ${
            muscleGroup === "Workout Focus" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Workout Focus")}
        >
          Workout Focus
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[100px] ${
            muscleGroup === "Home Workout" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Home Workout")}
        >
          Home Workout
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[100px] ${
            muscleGroup === "Equipment" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Equipment")}
        >
          Equipment
        </button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 pr-32">
      {/* Image Modals */}
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <div className="space-x-4">
        <button className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                                onClick={handleAddMuscleClick}
>
          <FaPlus className="text-2xl" />
          <span>Add MuscleGroup</span>
        </button>
      </div>
    </div>
  </div>

  {/* Vertical Line */}
  <hr className="h-auto border-l border-gray-900 mx-4" />

  {/* Second Div */}
  <div className="w-2/4 gap-2 p-4 rounded-lg mr-2">
    <div className="flex space-x-1 mb-4">
      <div className="w-[118px] pr-2">
        <h5 className="text-[16px] text-blacktext font-semibold mb-4">MuscleGroup:</h5>
      </div>
      <div className="w-[428px] mb-4 flex gap-[8px]">
        {/* Fitness Type Buttons */}
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Muscle Group" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Muscle Group")}
        >
          Chest
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Workout Focus" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Workout Focus")}
        >
          Core
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Home Workout" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Home Workout")}
        >
          Back
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Equipment" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Equipment")}
        >
          Arms
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Equipment" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Equipment")}
        >
          Core
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Equipment" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Equipment")}
        >
          Guts
        </button>
        <button
          className={`px-2 text-[12px] pb-1 h-[30px] w-[45px] ${
            muscleGroup === "Equipment" ? "bg-blue text-white" : "bg-white text-gray-700"
          } rounded-md`}
          onClick={() => setMuscleGroup("Equipment")}
        >
          Biceps
        </button>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2  pt-10 mr-4">
      {/* Image Modals (Second set) */}
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <ImageModal title="Thigh" imageSrc="images/diet.png" />
      <div className="space-x-4">
        <button className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                        onClick={handleAddWorkoutClick} 

>
          <FaPlus className="text-2xl" />
          <span>Add Workout</span>
        </button>
      </div>
    </div>
  </div>
</div>


      </div>
      <FitnessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMealType={(data) => console.log(data)}
      />
<MuscleModal
        isOpen={isMuscleModalOpen}
        onClose={() => setIsMuscleModalOpen(false)}
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

  
