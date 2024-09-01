import React from 'react';
import { FaSave } from 'react-icons/fa';

const WorkoutModal = ({ isOpen, onClose, onSave, workoutName, setWorkoutName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div
      className="absolute w-[304px] h-[413px] left-[calc(50%-152px)] top-[calc(50%-206.5px)] bg-white rounded-[30px] z-50 p-5"
    >
      {/* Media Section */}
      <div className="w-[269px] h-[150px] bg-black rounded-[15px] mb-6">
        <div className="p-3 text-white">
          <p className="m-0 font-poppins text-[14px] font-medium">Mov.2659.mp4</p>
          <p className="m-0 font-poppins text-[14px] font-normal">01:50</p>
        </div>
      </div>

      {/* Workout Name Section */}
      <div className="w-[269px] h-[80px] flex flex-col gap-1.5">
        <label className="font-poppins text-[16px] font-medium text-[#06152B]">
          Workout name
        </label>
        <div className="relative w-[214px] h-[50px] mb-6">
          <div className="w-[214px] h-[50px] bg-[#F1F4FA] rounded-[10px] absolute top-0" />
          <input
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="w-[180px] h-[21px] p-3 font-poppins text-[14px] font-normal text-[#06152B] bg-transparent border-none absolute top-[15px] left-[16.33px] opacity-70 placeholder:text-[#06152B]"
            placeholder="Hyperextensions"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            className="bg-textgreen text-white w-[125.44px] h-[50px] rounded-lg flex items-center justify-center"
            onClick={onSave}
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
    </div>
    </div>
  );
};

export default WorkoutModal;
