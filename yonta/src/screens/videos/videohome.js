import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import Layout from "../../Layout";
import { Trash2 } from "lucide-react";
import MuscleModalSmall from "../../components/Modals/addMusclesm";
import ImageModal from "../../components/Modals/imageModal"; // Import the ImageModal component
import VideoUploadModal from "../../components/Modals/videoUploadModal";

const VideoHome = () => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState("Chest");
  const [workouts, setWorkouts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iVideoModalOpen, setIVideoModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState("");

  const handleAddMuscleClick = () => {
    setIsModalOpen(true);
  };
  const handleSaveVideo = () => {
    console.log("Workout Saved:", );
    setIVideoModalOpen(false);
  };
  const handleAddVideoClick = () => {
    console.log('hello');
    
    setIVideoModalOpen(true);
  };
  // Dummy muscle group data
  const muscleGroupData = [
    { name: "Chest", size: 43 },
    { name: "Shoulder", size: 35 },
    { name: "Biceps", size: 30 },
    { name: "Back", size: 50 },
    { name: "Legs", size: 60 },
    { name: "Neck", size: 20 },
  ];

  // Dummy workout data
  const workoutData = {
    Chest: [
      { title: "Push Up", imageUrl: "https://via.placeholder.com/150", id: 1 },
      {
        title: "Bench Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 2,
      },
      {
        title: "Shoulder Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 3,
      },
      {
        title: "Lateral Raise",
        imageUrl: "https://via.placeholder.com/150",
        id: 4,
      },
      {
        title: "Shoulder Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 3,
      },
      {
        title: "Lateral Raise",
        imageUrl: "https://via.placeholder.com/150",
        id: 4,
      },
    ],
    Shoulder: [
      {
        title: "Shoulder Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 3,
      },
      {
        title: "Lateral Raise",
        imageUrl: "https://via.placeholder.com/150",
        id: 4,
      },
    ],
    Biceps: [
      { title: "Push Up", imageUrl: "https://via.placeholder.com/150", id: 5 },
      {
        title: "Bench Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 6,
      },
    ],
    Back: [
      {
        title: "Shoulder Press",
        imageUrl: "https://via.placeholder.com/150",
        id: 7,
      },
      {
        title: "Lateral Raise",
        imageUrl: "https://via.placeholder.com/150",
        id: 8,
      },
    ],
    // Add other muscle groups and their workouts similarly...
  };

  // Load the muscle groups on component mount
  useEffect(() => {
    setMuscleGroups(muscleGroupData);
    fetchWorkouts(selectedMuscle);
  }, [selectedMuscle]);

  // Fetch workouts based on the selected muscle group
  const fetchWorkouts = (muscle) => {
    setWorkouts(workoutData[muscle] || []);
  };

  // Handle muscle group change
  const handleMuscleChange = (muscle) => {
    setSelectedMuscle(muscle);
    fetchWorkouts(muscle);
  };

  // Handle delete workout
  const handleDelete = (id) => {
    console.log("Delete workout with id:", id);
    // Implement delete functionality
  };

  // Handle edit workout
  const handleEdit = (id) => {
    console.log("Edit workout with id:", id);
    // Implement edit functionality
  };
  console.log('onclose',isModalOpen);
  

  return (
    <Layout>
      <div className="flex py-2">
        {/* Sidebar: Muscle Groups */}
        <div className="space-y-2 p-4 w-[302px] h-[44px] rounded-[10px] ">
          {muscleGroups.map((muscle, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-[14px] text-blacktext bg-white rounded-[10px] p-2 mt-1 first:mt-0"
            >
              <span>{muscle.name}</span>
              <div className="flex items-center">
                <span className="mr-2">{muscle.size} MB</span>
                <button
                  className="flex items-center justify-center bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] p-[7px_10px]"
                  //   onClick={onDelete}
                >
                  <FaTrash className="w-[7.78px] h-[10px] text-white" />
                </button>
              </div>
            </div>
          ))}
          <div
            className="text-[14px] text-blacktext h-[43px] bg-white rounded-[10px] p-2 mt-1 cursor-pointer hover:bg-blue flex items-center justify-center"
            onClick={handleAddMuscleClick}
          >
            + Add Muscle
          </div>
        </div>

        {/* Main Content: Workouts */}
        <div className="w-3/4 p-4">
          <div className="flex space-x-[16px]">
            <h2 className="font-semibold pt-2 text-blacktext text-[16px]">
              Muscle group:{" "}
            </h2>
            <div className="flex gap-2">
              {muscleGroups.map((muscle) => (
                <button
                  key={muscle.name}
                  className={`p-2 text-[12px] rounded-[10px] ${
                    selectedMuscle === muscle.name
                      ? "bg-blue text-white"
                      : "bg-white text-blacktext"
                  }`}
                  onClick={() => handleMuscleChange(muscle.name)}
                >
                  {muscle.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {workouts.length > 0 ? (
              workouts.map((workout) => (
                <ImageModal
                  key={workout.id}
                  imageSrc={workout.imageUrl}
                  type={selectedMuscle}
                  onDelete={() => handleDelete(workout.id)}
                  onEdit={() => handleEdit(workout.id)}
                  title={workout.title}
                />
              ))
            ) : (
              <p>No workouts available for this muscle group.</p>
            )}
            <div className="space-x-4">
              <button
                className="flex flex-col items-center justify-center bg-white rounded-lg h-[156px] w-[156px]"
                onClick={handleAddVideoClick}
              >
                <FaPlus className="text-2xl" />
                <span>Add Workout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MuscleModalSmall
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMuscleType={(data) => console.log(data)}
      />
      <VideoUploadModal
      isOpen={ iVideoModalOpen}
      onSave={handleSaveVideo}
      onClose={() => setIVideoModalOpen(false)}
      />
    </Layout>
  );
};

export default VideoHome;
