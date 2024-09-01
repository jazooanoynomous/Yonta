import React, { useState } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import ImageModal from "../../components/Modals/imageModal";
import MuscleModal from "../../components/Modals/addMuscle";
import WorkoutModal from "../../components/Modals/workoutModal";

const AddWorkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [muscleGroup, setMuscleGroup] = useState("Chest");
  const [workoutName, setWorkoutName] = useState("");
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const handleAddMuscleClick = () => {
    setIsModalOpen(true);
  };

  const handleAddWorkoutClick = () => {
    console.log('hello');
    
    setIsWorkoutModalOpen(true);
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
            <span className="text-gray-500">Add Activity</span>
            <span className="text-black"> &gt; Workout</span>
          </h3>
          <button className="bg-textgreen text-white px-6 py-3 rounded-lg flex items-center">
            <FaSave className="mr-2" />
            Save
          </button>
        </div>

        {/* Main Content */}
        <div className="flex gap-2">
          {/* Player Types Section */}
          <div className="w-1/3 p-4 rounded-lg">
            <div className="flex space-x-2 mb-4">
              <h4 className="text-[16px] w-[110px] h-[24px] font-semibold mb-4">
                Player Types:
              </h4>
              <button className="px-1 h-[34px] w-[118px] text-[12px] bg-blue text-blue-700 rounded-md">
                Non Goalkeeper
              </button>
              <button className="px-4 py-2 size-[12px] h-[34px] w-[118px] text-[12px] bg-white text-gray-700 rounded-md">
                Goalkeeper
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 pr-2">
              {/* Player Type Cards */}
              <ImageModal title="Chest" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />
              <ImageModal title="Arm" imageSrc="images/diet.png" />
              <ImageModal title="Leg" imageSrc="images/diet.png" />
              <ImageModal title="Shoulders" imageSrc="images/diet.png" />
              <ImageModal title="Core" imageSrc="images/diet.png" />
              <ImageModal title="Chest" imageSrc="images/diet.png" />
              <ImageModal title="Thigh" imageSrc="images/diet.png" />

              {/* Repeat for other player types */}
              <button
                className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                onClick={handleAddMuscleClick}
              >
                <FaPlus className="text-2xl" />
                <span>Add Muscle</span>
              </button>
            </div>
          </div>

          {/* Muscle Group Section */}
          <div className="w-3/5 p-4 rounded-lg">
            <div className="flex space-x-1 mb-4">
              <h4 className="text-lg font-semibold mb-4">Muscle group :</h4>
              <div className="flex gap-[16px] mb-4">
                <button
                  className={`px-2 pb-1 text-[12px] h-[34px] w-[57px] ${
                    muscleGroup === "Chest"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Chest")}
                >
                  Chest
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] ${
                    muscleGroup === "Back"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Back")}
                >
                  Back
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] ${
                    muscleGroup === "Arms"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Arms")}
                >
                  Arms
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] ${
                    muscleGroup === "Core"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Core")}
                >
                  Core
                </button>
                <button
                  className={`px-2 text-[12px] pb-1 h-[34px] w-[57px] ${
                    muscleGroup === "Glutes"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Glutes")}
                >
                  Glutes
                </button>
                <button
                  className={`px-2 pb-1 text-[12px] h-[34px] w-[57px] ${
                    muscleGroup === "Biceps"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                  onClick={() => setMuscleGroup("Biceps")}
                >
                  Biceps
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 pr-4">
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
                  onClick={handleAddWorkoutClick} 
                >
                  <FaPlus className="text-2xl" />
                  <span>Add Workout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-textgreen text-white px-6 py-3 rounded-lg flex items-center">
          <FaSave className="mr-2" />
          Save
        </button>
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

export default AddWorkout;

  
