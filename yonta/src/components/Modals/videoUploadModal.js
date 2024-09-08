import React, { useState } from "react";
import { Camera, Upload } from "lucide-react";
import { FaSave } from "react-icons/fa";

const VideoUploadModal = ({isOpen, onSave, onClose }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [workoutName, setWorkoutName] = useState("");

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleSave = () => {
    // if (videoFile && workoutName) {
    //   onSave({ videoFile, workoutName });
    //   onClose();
    // } else {
    //   alert("Please upload a video and enter a workout name.");
    // }
    onClose();
  };
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[400px] h-[400px] p-6 ">
        <div className="flex justify-between mb-4">
          <h4 className="text-[16px] font-semibold">Video</h4>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-[269px] h-[150px] bg-backgroundgray rounded-lg aspect-video flex items-center justify-center">
            {videoFile ? (
              <video
                src={URL.createObjectURL(videoFile)}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center text-gray-500">Video Preview</div>
            )}
          </div>
          <div className="w-[180px] h-[148px] ">
            <div className="bg-backgroundgray h-[148px] text-greytext text-[12px] rounded-lg p-4 text-center">
              <Camera className="mx-auto mb-2" />
              <p className="text-sm font-semibold mb-2">Upload Video</p>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="text-[10px]   px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              >
                Webm,.Mp4
              </label>
            </div>
          </div>
        </div>
        <div className="relative mb-4 w-[210px] h-[80px]">
          <label
            htmlFor="workoutName"
            className="block text-[#06152B] text-[16px] font-medium mb-2"
            style={{ width: "120px", height: "24px" }}
          >
            Workout name
          </label>
          <input
            id="workoutName"
            type="text"
            placeholder="Workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="w-full bg-backgroundgray p-2 text-[14px] text-greytext rounded-[10px]"
          />
        </div>
            <div className="pl-[40px]">
        <button
          className="bg-textgreen h-[40px] text-white px-6 py-3 rounded-lg flex items-center"
          onClick={handleSave}
        >
          <FaSave className="mr-2" />
          Save
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadModal;
